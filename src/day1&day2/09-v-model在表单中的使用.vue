<template>
  <div>
    <p>
      来自于:
      <select v-model="city">
        <option value="广东">广东</option>
        <option value="福建">福建</option>
        <option value="广西">广西</option>
      </select>
    </p>

    <p>
      <!-- v-model在checkbox里, 会绑定checked属性 -->
      <!-- v-model和checkbox如何绑定多个选项, 把v-model的变量声明为数组就可以了 -->
      爱好:
      <input type="checkbox" v-model="hobby" value="写代码" />写代码
      <input type="checkbox" v-model="hobby" value="打豆豆" />打豆豆
      <input type="checkbox" v-model="hobby" value="钓鱼" />钓鱼
    </p>

    <p>
      性别:
      <input type="radio" value="男" v-model="gender" />男
      <input type="radio" value="女" v-model="gender" />女
    </p>

    <p>
      自我介绍:
      <textarea v-model="introduction"></textarea>
    </p>

    <button @click="tijiao">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "广东",
      hobby: ["写代码"],
      gender: "",
      introduction: "",
    };
  },
  methods: {
    tijiao() {
      console.log(
        " 地址: " + this.city,
        " 爱好: " + this.hobby,
        " 性别: " + this.gender,
        " 文本: " + this.introduction
      );
    },
  },
};
</script>

<style></style>
