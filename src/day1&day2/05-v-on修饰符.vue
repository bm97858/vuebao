<template>
  <div>
    <!-- 事件修饰符的语法: @事件名.修饰符="..." -->
    <!-- prevent修饰符: 阻止默认行为 -->
    <a href="https://www.baidu.com" @click.prevent="done">去百度</a>

    <!-- .stop修饰符是阻止事件冒泡的 -->
    <div class="parent" @click="parentFn">
      <div @click.stop="childFn">孩子节点</div>
    </div>

    <!-- .once修饰符: 方法只使用一次 -->
    <button @click.once="surprize">抽奖一次</button>

    <hr />
    <a href="https://www.baidu.com" @click.prevent>去百度</a>

    <div class="parent" @click="parentFn">
      <div @click.stop="childFn">孩子节点</div>
    </div>
    <button @click.once="surprize">抽奖一次</button>
  </div>
</template>

<script>
export default {
  methods: {
    done() {
      console.log("成功");
    },
    childFn() {
      console.log("孩子");
    },
    parentFn() {
      console.log("爸爸");
    },
    surprize() {
      console.log(111);
    },
  },
};
</script>

<style></style>
