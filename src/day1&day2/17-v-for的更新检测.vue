<template>
  <div>
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <p>
      <!-- 第一种, reverse方法会导致页面更新, reverse会修改原始数组 -->
      <button @click="list.reverse()">数组反转</button>
    </p>
    <p>
      <!-- 第二种, 数组截取不会导致页面更新, 原数组没有变化 -->
      <button @click="list.slice(0, 2)">数组截取</button>
    </p>
    <p>
      <!-- 第三种,直接array[index]的方式不会导致页面更新 -->
      <!-- 解决办法: $set(array, index, 值) -->
      <!-- 对象的更新: $set(object, key, 值) -->
      <button @click="list[0] = '班长'">班长上</button>
    </p>
    <p>
      <button @click="bossComeon">11111</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["wuhu", "盛哥", "波哥", "博哥"],
    };
  },
  methods: {
    bossComeon() {
      this.$set(this.list, 0, "班长");
    },
  },
};
</script>

<style></style>
