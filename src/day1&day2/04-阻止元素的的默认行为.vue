<template>
  <div>
    <a href="https://www.baidu.com" @click="preventRedirect">活动连接</a>
    <br />
    <a href="https://www.baidu.com" @click="pre">活动连接</a>
    <br />
    <a href="https://www.baidu.com" @click="anotherMethod(10, $event)">
      有参数的活动链接
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    pre(e) {
      e.preventDefault();
    },
    preventRedirect(e) {
      e.preventDefault(); /*阻止元素的的默认行为 */
    },
    anotherMethod(num, event) {
      event.preventDefault(num);
      console.log(num);
    },
  },
};
</script>

<style></style>
