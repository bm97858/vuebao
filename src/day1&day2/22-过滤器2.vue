<template>
  <div>
    <!-- 过滤器增加参数: {{表达式 | 过滤器(声明参数)}} -->
    <h1>{{ money | rmb("$") }}</h1>
    <h1>{{ money | rmb("￥") }}</h1>

    <h1>{{ message | reverse | upper }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 100,
      message: "abcdefg",
    };
  },
  /* filters: {
    rmb(value, unit) {
      return unit + value;
    },
    reverse(value) {
      return value.split("").reverse().join("");
    },
    upper(value) {
      return value.toUpperCase();
    },
  }, */
  filters: {
    rmb(value, unit) {
      return unit + value;
    },
    reverse(value) {
      return value.split("").reverse().join("");
    },
    upper(value) {
      return value.toUpperCase();
    },
  },
  methods: {},
};
</script>

<style></style>
