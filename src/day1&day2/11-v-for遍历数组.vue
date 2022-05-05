<template>
  <div>
    <ul>
      <!-- v-for的用法: v-for="变量名 in 数据" -->
      <li v-for="item in students">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="(item, index)in students">{{ index + 1 }}:{{ item }}</li>
    </ul>

    <ul>
      <!-- v-for遍历的是它所在的标签 -->
      <li v-for="(item, index) in students">
        <h2>{{ item }}</h2>
        <h2>{{ student + 1 }}名</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: ["伍湖", "佩奇", "龙傲天"],
    };
  },
};
</script>

<style></style>
