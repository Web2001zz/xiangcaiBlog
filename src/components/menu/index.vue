<template>
  <div class="menu">
    <div class="show">
      <header>
        <img src="../../assets/image/ac1.jpg" />
        <span>xiangcai</span>
      </header>
      <div class="menu-list">
        <ul>
          <li class="category1" v-for="item in menuList" :key="item.index">
            <span>{{ item.name }}</span>
            <ul>
              <li
                class="category2"
                v-for="item in item.category2"
                :key="item.index"
              >
                <router-link :to="item.url">{{ item.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import globalData from "../../assets/js/data";
const { menuList } = globalData;
export default {
  name: "menuBar",
  data() {
    return {
      menuList,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.menu {
  width: 20px;
  height: 100vh;
  box-sizing: border-box;
  /* background: linear-gradient(to right,#ccc 80%,#fff 20%); */
  background: #ccc;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 600ms linear;
  box-shadow: 3px 3px 3px rgb(129, 129, 129);
}
.menu:hover {
  width: 200px;
  transition: all 600ms linear;
}
.menu::after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border: 10px solid transparent;
  border-left: 20px solid #ccc;
  right: -30px;
  top: 20px;
  transition: all 500ms linear;
}

.show {
  width: 0px;
  overflow: hidden;
  transition: all 600ms linear;
}
.menu:hover .show {
  width: 100%;
  transition: all 600ms linear;
}
.menu:hover::after {
  transform: rotate(-900deg);
  transform-origin: 25% 50% 0;
  border-left: 20px solid #fff;
  right: 0;
  transition: all 500ms linear;
}
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  /* box-shadow: 5px 10px 10px rgb(129, 129, 129); */
  justify-content: space-evenly;
  align-items: center;
}
header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 500ms linear;
}
header img:hover {
  border-radius: 4px;
  transition: all 500ms linear;
}
header span {
  color: black;
  font-size: 18px;
  cursor: pointer;
}
.menu-list {
  width: 100%;
  margin: 50px 0;
  /* border: 1px solid black; */
  box-sizing: border-box;
}

.menu-list ul .category1 {
  padding: 10px 25px;
  white-space: nowrap;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  margin: 20px 0;
  overflow: hidden;
  border-bottom: 1px dashed rgb(67, 56, 56);
  transition: all 300ms linear;
  max-height: 24px;
  position: relative;
  /* box-shadow: 5px 10px 10px rgb(129, 129, 129); */
}

.menu-list ul .category1:hover {
  max-height: 150px;
  transition: all 300ms linear;
}
.menu-list ul .category1:hover::after {
  transform: rotate(630deg);
  transition: all 300ms linear;
  top: 18px;
}

.menu-list ul .category1::after {
  content: "";
  display: block;
  border: 5px solid transparent;
  border-right: 10px solid #fff;
  position: absolute;
  right: 75px;
  top: 15px;
  transition: all 300ms linear;
}

.menu-list .category1 .category2 {
  padding-left: 20px;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.menu-list .category1 .category2 span {
  margin: 10px 0;
  cursor: pointer;
}
</style>
