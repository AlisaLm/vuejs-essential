import Vue from 'vue'
import App from './App.vue'
// 引入路由配置
import router from "@/router";
// 引入全局验证指令
import './directives/index'
import './components'
// 引入store/index.js的默认值
import store from "@/store";
//引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'

//使用插件
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  // 注入store
  store,
  render: h => h(App),
}).$mount('#app')
