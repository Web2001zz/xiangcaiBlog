import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import initAxios from "./assets/js/axisoPreset";
import globalData from "./assets/js/data";

let baseUrl = "http://trademark-isv-api.baobeituan.com/client/";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$baseUrl = baseUrl;
Vue.prototype.$globalData = globalData

new Vue({
  router,
  render: (h) => h(App),
  created() {
    initAxios(this);
  },
}).$mount("#app");
