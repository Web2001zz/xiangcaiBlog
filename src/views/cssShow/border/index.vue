<template>
  <div class="border">
    <div v-for="item in 18" :key="item.index"></div>
  </div>
</template>

<script>
export default {
  name: "border",
};
</script>

<style scoped>
.border {
  display: flex;
  flex-wrap: wrap;
}
.border div {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 12px;
  margin: 0px 8px 16px 8px;
}
</style>
