<template>
  <div>
    <!-- v-text, 语法v-text="变量", 它更新的是textContent属性 -->
    <h1>v-text</h1>
    <h1 v-text="str"></h1>

    <!-- v-html语法, v-html="变量", 它设置innerHTML属性 -->
    <h1>v-html</h1>
    <h1 v-html="str"></h1>

    <!-- v-html和v-text都会覆盖标签内的插值表达式 -->
    <h1>v-html和插值优先级</h1>
    <h1 v-html="str">{{ 666 }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<input type = 'number'/>",
    };
  },
  methods: {},
};
</script>

<style></style>
