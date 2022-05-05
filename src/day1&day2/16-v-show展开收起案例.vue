<template>
  <div>
    <!-- 第一步, 先静后懂, 先实现静态效果, 展示出来诗的标题, 内容和按钮 -->
    <h1>案例: 折叠面板</h1>
    <h2>
      芙蓉楼送辛渐
      <!-- 第三步绑定事件修改显示 -->
      <!-- 第四部, 修改按钮文案 -->
      <button @click="controlDisplay">{{ showPoem ? "收起" : "展开" }}</button
      ><!-- 
      <button @click="controlDisplay">{{ showPoem ? "收起" : "展开" }}</button> -->
    </h2>
    <!-- 第二步, 控制显示, 我们这里使用v-if或者v-show都可以 -->
    <div v-show="showPoem">
      <p>寒雨连江夜入吴，</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // showPoem: true,
      showPoem: false,
    };
  },
  methods: {
    controlDisplay() {
      // this.showPoem = !this.showPoem;
      this.showPoem = !this.showPoem;
    },
  },
};
</script>

<style></style>
