<template>
  <!-- v-model修饰符用法: v-model.修饰符="变量" -->
  <!-- .number: 把数据转换为数字类型并赋值给变量 -->
  <div>
    <p>年龄: <input type="number" v-model.number="age" /></p>
    <!-- trim修饰符: 去掉字符串首位空格 -->
    <p>用户名: <input type="text" v-model.trim="username" /></p>
    <!-- lazy等表单失去焦点, 才把值赋予给Vue数据变量 -->
    <p>搜索: <input type="text" v-model.lazy="search" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      username: "",
      search: "",
    };
  },
};
</script>

<style></style>
