<template>
  <div>
    <!-- 小写影响全选案例 -->
    <div>
      全选:
      <input v-model="isAll" type="checkbox" />
      <button @click="reverseFn">反选</button>
    </div>
    <ul>
      <!-- arr.forEach((item,index)=>{
        这里的item以及index和v-for中的eitem index是一样的, 都是独立使用的
      }) -->
      <!-- 
        v-model双向绑定在复选框上的情况:
        情况一: 当v-model绑定的变量为 数组 的时候, 这个变量和复选框的value属性双向绑定在疫情
        情况二: 当v-model绑定的变量为"非数组"的时候, 这个变量和复选框的checked属性双向绑定在一起
       -->
      <li v-for="(item, index) in arr" :key="index">
        <input v-model="item.c" type="checkbox" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  methods: {
    // reverseFn() {
    //   this.arr.forEach((item) => {
    //     // !表示取反, 也就是当值为false的时候取反为true, 当值为true的时候取反变为false
    //     item.c = !item.c;
    //   });
    // },
    reverseFn() {
      this.arr.forEach((item) => {
        item.c = !item.c;
      });
    },
  },
  filters: {},
  computed: {
    // isAll() {
    // 当小选框全部选中的时候, 全选框的状态为true, 否则为false
    // every: 能够遍历数据, 这个函数会返回一个布尔值, 这个函数中可以写条件判断,
    // 当数组中的所有元素都符合你写的条件判断的时候, 这个every方法会返回true, 否则返回false
    // 也就是当有一个元素不符合条件的时候返回false
    // every是数组的方法, 不能用在对象里面
    // let bool = this.arr.every((item) => {
    //   return item.c === true;
    // });
    // return bool;

    isAll: {
      // set(bool) {
      //   // set相当于监听器
      //   // console.log(bool);
      //   // bool即为获取到的用户设置的全选框状态值
      //   // 那么我们只需要把这个状态值赋值给小选框的c属性即可
      //   this.arr.forEach((item) => {
      //     item.c = bool;
      //   });
      // },
      // get() {
      //   let bool = this.arr.every((item) => {
      //     return item.c === true;
      //   });
      //   return bool;
      // },
      set(bool) {
        this.arr.forEach((item) => {
          item.c = bool;
        });
      },
      get() {
        let bool = this.arr.every((item) => {
          return item.c === true;
        });
        return bool;
      },
    },
  },
};
</script>

<style scoped></style>
