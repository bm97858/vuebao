<template>
  <div>
    <!-- 动态设置style -->
    <!-- 语法: :style="{ 样式属性: 样式的值}" -->
    <!-- 样式属性如果有-连字符, 可以用驼峰命名方式, 也可以加引号 -->
    <!-- 'font-size':'20px' -->
    <!-- fontSize: '20px' -->
    <button
      :style="{ background: isOn ? 'grey' : 'white', 'font-size': '20px' }"
      @click="isOn = !isOn"
    >
      开关
    </button>
    <!-- ----------------------------------------- -->
    <button
      :tyle="{ background: isOn ? 'grey' : 'white', 'font-size': '20px' }"
      @click="isOn = !isOn"
    >
      开关2
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOn: false,
    };
  },
  methods: {},
};
</script>

<style>
.grey {
  background-color: #fff;
}
.white {
  background-color: #000;
}
</style>
