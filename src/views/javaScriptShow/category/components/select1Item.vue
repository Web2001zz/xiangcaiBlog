<template>
  <div class="select-card">
    <div class="select-title">
      <span class="title"
        >{{ category1Item.category1 }}（共
        {{ category1Item.children.length }} 项，还可以选择{{
          10 - category1Item.children.length
        }}项，10项以内680元）</span
      >
      <span class="price"> ￥648 </span>
    </div>

    <div
      class="select-selected"
      v-for="item in category1Item.children"
      :key="item.index"
    >
      <div>{{ item.category2 }}</div>
      <ul>
        <li v-for="item in item.children" :key="item.index">
          {{ item.category3 }}
          <span>x</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "select1Item",
  props: {
    category1Item: Object,
  },
};
</script>

<style scoped>
.select-card {
  border-bottom: 1px solid black;
  transition: all 500ms linear;
  max-height: 48px;
  overflow: hidden;
}
.select-card:hover {
  transition: all 750ms linear;
  max-height: 700px;
}
.select-title {
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
.select-selected {
  padding-left: 24px;
  height: auto;
  /* border: 1px solid black; */
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 10px;
}
.select-selected div {
  height: 24px;
  line-height: 24px;
  /* border: 1px solid black; */
  padding-right: 10px;
}
.select-selected ul {
  display: flex;
  flex-wrap: wrap;
}
.select-selected ul li {
  height: 24px;
  margin: 0 4px 8px 4px;
  padding: 0 8px;
  line-height: 24px;
  text-align: center;
  border: 1px dashed black;
  cursor: pointer;
}
.select-selected ul li:hover {
  border: 1px solid rgb(253, 2, 2);
  position: relative;
}

.select-selected ul li span {
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 12px;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  display: block;
  right: -5px;
  top: -5px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(253, 2, 2);
}
</style>
