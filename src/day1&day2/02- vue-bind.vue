<template>
  <!-- 只能有一个根标签 -->
  <div>
    <div>
      <a v-bind:href="url">去百度吧</a>
      <br />
      <!-- 简写方式 :属性名="vue变量" -->
      <a :href="url">去百度吧</a>
      <br />
      <img :src="imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.baidu.com",
      imgUrl:
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    };
  },
};
</script>

<style scoped>
/* scoped样式只在当前template里生效 */
</style>
