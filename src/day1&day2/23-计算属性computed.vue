<template>
  <div>
    <!-- 用途: 例如购物车, 总价是依赖商品价格算出来的 -->
    <!-- 当你需要依赖一些变量计算出来结果的时候, 就可以使用计算属性 -->
    <!-- 计算属性不能和data里的数据重名 -->
    <p>商品1: <input type="number" v-model.number="product1" /></p>
    <p>商品2: <input type="number" v-model.number="product2" /></p>
    <p>商品3: <input type="number" v-model.number="product3" /></p>
    <p>商品4: <input type="number" v-model.number="product4" /></p>
    <h3>总价: {{ sum }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product1: 100,
      product2: 200,
      product3: 1,
      product4: 2,
    };
  },
  computed: {
    // 计算属性依赖的变量变化的时候, 计算属性会重新计算
    // 如果以来的变量没有改变, 则使用缓存数据
    /* sum() {
      console.log("计算属性调用了");
      return this.product1 + this.product2 + this.product3;
    }, */
    sum() {
      return this.product1 + this.product2 + this.product3 + this.product4;
    },
  },
  methods: {},
};
</script>

<style></style>
