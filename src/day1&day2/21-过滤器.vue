<template>
  <div>
    <h1>价格: {{ price }}</h1>
    <!-- 过滤器: 作用是转换格式, 把变量或者表达式转换出来 -->
    <!-- 语法: {{ 表达式 | }} -->
    <h1>{{ price | rmb }}</h1>
    <h1>{{ price | dollar }}</h1>
    <h1>{{ price | oy }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
    };
  },
  // filters
  filters: {
    // 过滤器声明为方法
    rmb(value) {
      // 方法需要返回一个值
      return "￥" + value;
    },
    oy(val) {
      return "€" + val;
    },
  },
  methods: {},
};
</script>

<style></style>
