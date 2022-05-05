<template>
  <div><span>名字:</span><input type="text" v-model="full" /></div>
</template>

<script>
export default {
  data() {
    return {
      name: "小明",
    };
  },
  methods: {},
  filters: {},
  computed: {
    full() {
      return "王" + this.name;
    },
  },
};
</script>

<style scoped></style>
