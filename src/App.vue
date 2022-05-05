<template>
  <div><span>名字:</span><input type="text" v-model="full" /></div>
</template>

<script>
export default {
  data() {
    return {
      name: "小明",
    };
  },
  methods: {},
  filters: {},
  computed: {
    // 函数的写法是不允许修改计算属性
    // 直接修改会报错, 可以使用计算属性
    /* full() {
      return "王" + this.name;
    },
  }, */
    /* 
    计算属性的完整写法
    语法: 
    属性名:
    set(val){
      // val: 就是用户修改后的值
    },
    get(){
      //  这个get函数其实就是计算属性函数写法的那个函数,可以理解用于设置计算属性的
      return  值
    }
  */
    full: {
      // set函数和get函数是vue框架中提供给我们使用的, set函数中的函数同样是vue框架提前设计好的
      // 只要写上了set函数就能够获取到参数, 并且这个参数就是代表用户设置的值
      /* set(val) {
        // 当用户修改计算属性时, 触发set函数, 并且可以通过Set函数的参数获取到用户设置的值
        console.log(val);
      },
      get() {
        console.log(41);
        // 当初次渲染计算属性和依赖项发生改变的时候触发get函数
        return "王" + this.name;
      }, */
      set(v) {
        console.log(v);
      },
      get() {
        console.log(41);
        return "王" + this.name;
      },
    },
  },
};
</script>

<style scoped></style>
