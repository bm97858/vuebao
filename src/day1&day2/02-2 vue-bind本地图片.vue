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
      <!--  -->
    </div>
  </div>
</template>

<script>
// 使用本地图片的时候, 必须先使用再绑定使用,或者直接写死,不引入
import imgUrl from "../../查缺补漏/3d模型.jpg";
export default {
  data() {
    return {
      url: "https://www.baidu.com",
      imgUrl,
    };
  },
};
</script>

<style scoped>
/* scoped样式只在当前template里生效 */
</style>
