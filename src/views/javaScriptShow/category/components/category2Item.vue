<template>
  <ul :class="level2 ? 'level-on' : 'level-off'">
    <span @click="getCategory3">{{ category2 }}</span>
    <li
      class="level3"
      v-for="item in category3"
      :key="item.index"
      @click="addCategory(item.label)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "category2Item",
  props: {
    category2: String,
    parentCode: String,
  },
  data() {
    return {
      level2: false,
      isShow: false,
      category3: [],
    };
  },
  methods: {
    // 请求三级分类
    getCategory3() {
      if (!this.isShow) {
        let url = "trademark/classification/getClassificationsByParentCode.get";
        let params = {
          parentCode: this.parentCode,
        };
        this.$axios.get(url, { params }).then((res) => {
          // console.log(res);
          this.category3 = res.classifications;
          console.log(this.category3);
        });
        this.isShow = true;
      }
      this.level2 = !this.level2;
    },
    // 选择商标分类
    addCategory(item) {
      console.log(item);
    },
  },
};
</script>

<style scoped>
.level-on {
  height: auto;
}
.level-off {
  height: 32px;
}
ul {
  width: 100%;
  line-height: 32px;
  overflow: hidden;
}
ul span {
  cursor: pointer;
  font-size: 14px;
}
.level3 {
  padding-left: 20px;
  cursor: pointer;
  font-size: 12px;
}
</style>
