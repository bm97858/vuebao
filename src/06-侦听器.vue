<template>
  <div>
    <!-- 
      侦听器watch
      作用: 侦听data/计算属性中声明的变量的值的变化
      语法: 
        watch: {
          被侦听的属性名(newVal, oldVal)){
            newVal: 表示修改后的值
            oldVal: 表示修改前的值
          }
        }

      注意: watch是和计算属性computed同级的 
     -->
    <input type="text" v-model="name" />
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "小明",
    };
  },
  watch: {
    // 只要被侦听的name属性的值发生改变, 函数就会立即触发
    // 注意: 这里的变量名不需要加this, 因为vue源码中帮我们处理好了, 但是里函数里面还是需要this获取变量
    name: function (newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  methods: {},
  filters: {},
  computed: {},
};
</script>

<style scoped></style>
