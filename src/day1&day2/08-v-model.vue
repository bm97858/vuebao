<template>
  <div>
    <!-- v-model 双向绑定 -->
    <p>用户名: <input type="text" v-model="username" /></p>
    <p>密码: <input type="password" v-model="password" /></p>
    <button @click="login">登录</button>
    <!-- ------------------------------------------------------- -->
    <p>user: <input type="text" v-model="user" /></p>
    <p>pas: <input type="text" v-model="pas" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      //-------------------
      user: "",
      pas: "",
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password, this.user, this.pas);
    },
  },
};
</script>

<style></style>
