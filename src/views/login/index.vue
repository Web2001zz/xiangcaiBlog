<template>
  <div class="login">
    <h2>请先登录！</h2>
    <div class="form">
      <div>
        <span>账号：</span>
        <input type="text" v-model="loginName" @keyup.enter="login" />
      </div>

      <div>
        <span>密码：</span>
        <input type="password" v-model="password" @keyup.enter="login" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginName: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$axios
        .post("sp/login.post", {
          loginName: this.loginName,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          let nick = res.nick;
          console.log(nick);
          this.loading = false;
          console.log("登录成功！");
          let expires = new Date();
          expires.setTime(Date.now() + 3 * 3600 * 1000 * 24);
          document.cookie = `TRADEMARK_bbtTMUserId=${
            res.TRADEMARK_bbtTMUserId
          };expires=${expires.toGMTString()};path=/;domain=baobeituan.com`;
          localStorage.setItem("trademarkNick", nick);
          this.$router.replace("/home");
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}
h2 {
  /* border: 1px solid black; */
  font-size: 24px;
  margin-bottom: 24px;
}
.form div {
  display: flex;
  width: 40%;
  /* border: 1px solid black; */
  align-items: center;
  justify-content: space-evenly;
}
span {
  height: 24px;
  line-height: 24px;
  font-size: 18px;
  box-sizing: border-box;
}
input {
  width: 250px;
  height: 24px;
  box-shadow: 3px 3px 3px #ccc;
  line-height: 24px;
  padding: 0 10px;
  font-size: 18px;
  border-radius: 5px;
}
</style>
