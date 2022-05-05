<template>
  <div>
    <p>用户名: <input type="text" @keydown="fn" /></p>
    <!-- 按键修饰符: @事件名.按键= '方法' -->
    <!-- enter, 用户按下回车才会触发事件 -->
    <p>密码: <input type="password" @keydown.enter="fn" /></p>
    <p>id:<input type="text" @keydown.esc="fn" /></p>
    <p>a:<input type="text" @keydown.a="fn" /></p>
    <p>right:<input type="text" @keydown.right="fn" /></p>
    <p>up:<input type="text" @keydown.up="fn" /></p>
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log("识别到按键了");
    },
  },
};
</script>

<style></style>
