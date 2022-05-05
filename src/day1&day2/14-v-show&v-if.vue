<template>
  <div>
    <!-- v-show控制显示, 通过display: none控制显示 -->
    <!-- 语法: v-show="变量或者表达式", 如果变量或者表达式为true, 会显示标签, 否则隐藏 -->
    <h1 v-show="age >= 18">年满18岁才能看到以下内容</h1>

    <p>v-if</p>
    <!-- v-if可以控制标签显示, 语法: v-if="变量或者表达式" -->
    <!-- v-if通过控制标签是否删除显示 , v-if有性能优势-->
    <h1 v-if="age >= 18">年满18岁才能看到以下内容</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 1,
    };
  },
  methods: {},
};
</script>

<style></style>
