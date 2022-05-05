<template>
  <div>
    <!-- 先静后动 -->
    <h1>{{ message }}</h1>
    <button @click="reverseFn">逆转</button>
    <!-- ----------------- -->
    <h2>{{ message }}</h2>
    <h1 @mousemove="reverseFn">扭转</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "上海自来水来...",
    };
  },
  methods: {
    reverseFn() {
      // 字符串拆成数组, 使用split
      const arr = this.message.split("");
      // 数组倒转方法reverse, 会修改原始数组
      arr.reverse();
      // 拼接数组为字符串
      const result = arr.join("");
      this.message = result;
      console.log(arr);
    },
  },
};
</script>

<style></style>
