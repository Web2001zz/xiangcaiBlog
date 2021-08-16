<template>
  <ul :class="level1 ? 'level-on' : 'level-off'">
    <span @click="getCategory2">{{ category1 }}</span>
    <li class="level2" v-for="item in category2" :key="item.index">
      <Category2Item
        :category2="item.label"
        :parentCode="item.classificationCode"
      ></Category2Item>
    </li>
  </ul>
</template>

<script>
import Category2Item from "./category2Item.vue";
export default {
  name: "category1Item",
  props: {
    category1: String,
    parentCode: String,
    getCategory:Function
  },
  data() {
    return {
      level1: false,
      isShow: false,
      category2: [],
    };
  },
  methods: {
    // 请求二级分类
    getCategory2() {
      if (!this.isShow) {
        let url = "trademark/classification/getClassificationsByParentCode.get";
        let params = {
          parentCode: this.parentCode,
        };
        this.$axios.get(url, { params }).then((res) => {
          // console.log(res);
          this.category2 = res.classifications;
          // console.log(this.category2);
        });
        this.isShow = true;
      }
      this.level1 = !this.level1;
    },
  },
  components: {
    Category2Item,
  },
};
</script>

<style scoped>
.level-on {
  height: auto;
  /* background-color: red; */
}
.level-off {
  height: 32px;
  /* background-color: blue; */
}
ul {
  width: 100%;
  line-height: 32px;
  overflow: hidden;
}
ul span {
  cursor: pointer;
  font-size: 16px;
}
.level2 {
  padding-left: 20px;
  cursor: pointer;
}
</style>
