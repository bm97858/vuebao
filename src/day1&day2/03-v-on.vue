<template>
  <!-- 只能有一个根标签 -->
  <div>
    <h1>加加{{ count }}</h1>
    <button v-on:click="count++">+1</button>
    <br />
    <button v-on:click="addFn">+2</button>
    <br />
    <button v-on:click="addMore(5)">+5</button>
    <br />
    <button @click="addMore(10)">+10</button>
    <br />
    <button @click="addMore(100)">+100</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    addFn() {
      this.count = this.count + 2;
    },
    addMore(num) {
      this.count = this.count + num;
    },
  },
};
</script>

<style scoped>
/* scoped样式只在当前template里生效 */
</style>
