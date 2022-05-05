<template>
  <div class="container">
    <div class="row">
      <div class="col-12 pt-3">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">编号</th>
              <th scope="col">资产名称</th>
              <th scope="col">价格</th>
              <th scope="col">创建时间</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <!-- 遍历商品列表 -->
            <!--  -->
            <tr v-for="(item, index) in list" :key="item.id">
              <th scope="row">100</th>
              <td>{{ item.name }}</td>
              <!-- 动态设置加个颜色, 使用class -->
              <td :class="{ red: item.price > 100, green: item.price > 1000 }">
                {{ item.price }}
              </td>
              <td>{{ item.time | dateFormat }}</td>
              <td>
                <!-- 删除里面绑定事件, 要知道删除哪一个商品, 所以要获取index -->
                <button
                  type="button"
                  class="btn btn-link"
                  @click="deleteProduct(index)"
                >
                  删除
                </button>
              </td>
            </tr>
            <tr class="bg-light">
              <th scope="row">统计</th>
              <td colspan="2">总价：{{ totalPrice }}</td>
              <td colspan="2">均价：{{ jPrice }}</td>
            </tr>
          </tbody>
          <tfoot v-show="list.length === 0">
            <tr>
              <td class="text-center" colspan="5">暂无数据</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- 第一步, 收集表单数据, 使用v-model -->
    <form class="row align-items-center">
      <div class="col-3">
        <input
          type="text"
          class="form-control"
          placeholder="资产名称"
          v-model="productName"
        />
      </div>

      <div class="col-3">
        <input
          type="text"
          class="form-control"
          placeholder="价格"
          v-model.number="price"
        />
      </div>

      <div class="col-3">
        <!-- 第二步, 绑定事件 -->
        <!-- 阻止表单默认行为.prevent修饰符 -->
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="addProduct"
        >
          添加资产
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "App",
  data() {
    return {
      list: JSON.parse(localStorage.getItem("74-list")) || [],
      /* list: [
        {
          id: 100,
          name: "外套",
          price: 199,
          time: new Date("2010-08-12"),
        },
        {
          id: 101,
          name: "裤子",
          price: 34,
          time: new Date("2013-09-01"),
        },
        {
          id: 102,
          name: "鞋",
          price: 25.4,
          time: new Date("2018-11-22"),
        },
        {
          id: 103,
          name: "头发",
          price: 19900,
          time: new Date("2020-12-12"),
        },
      ], */
      productName: "",
      price: "",
    };
  },
  filters: {
    // 格式化日期
    dateFormat(value) {
      return moment(value).format("YYYY-MM-DD");
    },
  },
  methods: {
    addProduct() {
      // 检查用户有没有输入商品名称和价格
      if (!this.productName || !this.price) {
        alert("请输入必要的内容");
        return;
      }
      // 获取表单内容
      // 商品名称和价格
      const product = {
        name: this.productName,
        price: this.price,
        time: new Date(),
      };
      if (this.list.length === 0) {
        product.id = 100;
      } else {
        // 获取数组最后一个元素
        const last = this.list[this.list.length - 1]; //获取数组最后一个元素, 当前数组的长度-1=最后一个元素的索引值

        product.id = last.id + 1;
      }
      // push会修改原始数组, 导致页面会刷新
      this.list.push(product);
    },
    deleteProduct(index) {
      /* splice方法, 作用是删除指定索引的元素,  */
      this.list.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.list.forEach((item) => {
        total = total + item.price;
      });
      return total;
    },
    // 均价
    // jPrice:function(){} 可简写为如下
    jPrice() {
      // 均价= 总价/数量
      return this.totalPrice / this.list.length;
    },
  },
  // 实现保存数据到本地
  /* watch: {
    list: {
      deep: true,
      handler(newArr) {
        // 保存数据
        localStorage.setItem("74-list", JSON.stringify(newArr));
      },
    },
  }, */
  watch: {
    list: {
      deep: true,
      handler(newArr) {
        // 保存数据
        localStorage.setItem("74-list", JSON.stringify(newArr)); // setItem
      },
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: rgb(64, 241, 64);
}
</style>
