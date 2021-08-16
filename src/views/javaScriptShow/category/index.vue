<template>
  <div class="category">
    <h2>商标分类选项</h2>
    <div class="category-card">
      <ul class="category1">
        <li v-for="item in category1" :key="item.classificationCode">
          <Category1Item
            :category1="item.label"
            :parentCode="item.classificationCode"
          ></Category1Item>
        </li>
      </ul>
      <div class="selected">
        <ul>
          <li v-for="item in selectItem" :key="item.index">
            <Select1Item :category1Item="item"></Select1Item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from "../../../assets/js/mockData.js";
let { selectItem } = mockData;
import Category1Item from "./components/category1Item.vue";
import Select1Item from "./components/select1Item.vue";
export default {
  name: "category",
  data() {
    return {
      category1: [],
      selectItem,
    };
  },
  methods: {
    // 请求一级分类
    getCategory1() {
      this.$axios
        .get("trademark/classification/getClassificationsByParentCode.get")
        .then((res) => {
          // console.log(res.classifications);
          this.category1 = res.classifications;
        });
    },
  },
  mounted() {
    this.getCategory1();
  },
  components: {
    Category1Item,
    Select1Item,
  },
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 24px;
}
.category-card {
  width: 100%;
  display: flex;
  height: 800px;
  box-sizing: border-box;
  /* border: 1px solid black; */
}
.category1 {
  width: 275px;
  height: 800px;
  box-sizing: border-box;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: scroll;
  white-space: nowrap;
}
.selected {
  border: 1px solid black;
  border-left: none;
  box-sizing: border-box;
  height: 100%;
  width: calc(100% - 275px);
}
</style>
