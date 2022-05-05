<template>
  <!-- 只能有一个根标签 -->
  <div>
    <h1>{{ bg }}</h1>

    <h2>{{ obj.name }}</h2>

    <h2>{{ obj.age + "岁" }}</h2>

    <h2>{{ obj.age > 18 ? "成年" : "未成年" }}</h2>

    <h3>老师叫{{ "博" }}哥</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: "小刘",
      obj: {
        name: "明",
        age: 19,
      },
    };
  },
};
</script>

<style scoped>
/* scoped样式只在当前template里生效 */
</style>
