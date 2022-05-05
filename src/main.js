import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

// 全局过滤器, 所有组件都能使用
Vue.filter('dollar', (value) => {
  return '$' + value
})

new Vue({
  render: h => h(App),
}).$mount('#app')   // mount:挂载
