<template>
  <div>
    <ul>
      <!-- v-for遍历对象, item就是对象里的value -->
      <li v-for="item in obj">{{ item }}</li>
    </ul>
    <ul>
      <!-- v-for遍历对象, item就是对象里的value -->
      <li v-for="(item, key) in obj">{{ key }}:{{ item }}</li>
    </ul>
    <h1>遍历数字</h1>
    <ul>
      <!-- 数字是从1开始遍历的 -->
      <li v-for="(item in 9) in obj">{{ item }}</li>
    </ul>

    <h2>字符串拆分</h2>
    <ul>
      <!-- 数字是从1开始遍历的 -->
      <li v-for="item in msg">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "jack",
        age: 20,
      },
      msg: "74期",
    };
  },
};
</script>

<style></style>
