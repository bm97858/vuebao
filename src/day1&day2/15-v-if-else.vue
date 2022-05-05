<template>
  <div>
    <!-- v-if可以和v-else搭配, 来条件控制显示 -->
    <!-- v-show是不可以和v-else搭配使用 -->
    <!-- v-if和v-else一定要是相邻元素 -->
    <h1 v-if="age >= 18">来吃榴莲</h1>
    <h1 v-else>来吃甜甜圈</h1>
    <!-- v-if和v-else-if还有v-else可以一起搭配, 实现多个条件判断 -->
    <h1 v-if="age < 18">甜甜圈</h1>
    <h1 v-else-if="age < 60">枸杞泡水</h1>
    <h1 v-else-if="age < 80">脑白金</h1>
    <h1 v-else-if="age < 100">冬虫夏草</h1>
    <h1 v-else>灵丹妙药</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 18,
    };
  },
  methods: {},
};
</script>

<style></style>
