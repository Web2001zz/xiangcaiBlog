import axios from "axios";
//  全局配置axios
let isExistConfirm = false;
const initAxios = (vm) => {
  axios.defaults.baseURL = vm.$baseUrl;
  axios.defaults.withCredentials = true;
  axios.defaults.crossDomain = true;
  axios.defaults.timeout = 30000;
  axios.defaults.headers = {
    "Content-Type": "application/json;charset=UTF-8",
  };
  axios.interceptors.response.use(
    (res) => {
      const status = res.data.status;
      if (status === 1) {
        return res.data.data;
      } else if (status === -1) {
        if (!isExistConfirm) {
          isExistConfirm = true;
          console.log(res.data.msg);
          vm.$router.push("/login");
        }
      } else {
        if (res.data.msg) {
          console.log(res.data.msg);
        }
        return Promise.reject(res);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export default initAxios;
