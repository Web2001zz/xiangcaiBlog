<template>
  <div id="app">
    <MenuBar></MenuBar>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import MenuBar from "./components/menu";
export default {
  name: "app",
  components: {
    MenuBar,
  },
};
</script>
<style>
@import "./assets/css/reset.css";
.main {
  margin: 0 auto;
  padding: 25px;
  width: 60%;
  border: 10px black double;
  height: 100vh;
}
</style>
