<template>
  <div>
    <!-- 
      侦听器如何侦听复杂数据类型的变量呢
      答: 可以使用深度侦听
      语法: 
      要侦听的属性名: {
        deep: true,// 表示深度侦听
        handler(newVal,oldVal){{
          这个函数是固定写法, 用来接收对象修改前后的值
        }}
      }
     -->
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "小明",
        age: 18,
      },
    };
  },
  watch: {
    // user(newVal, oldVal) {
    // 函数写法, 不能侦听到对象中属性值的变化
    // 那如何能够侦听呢? 答: 使用过深度侦听

    // console.log(newVal, oldVal);
    // },
    user: {
      immediate: true, // 立即执行, 当这个属性的值为true的时候, 当诚信执行的时候like会触发侦听器
      deep: true, // true, 启动深度侦听
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
        //注意: 我们打印出来的newVal和oldVal值是一样的
        // 为什么呢? 答: 因为user是一个对象, 所以我们只要修改属性的值, 那么对象中属性也就跟着改变了
      },
    },
  },
};
</script>

<style></style>
