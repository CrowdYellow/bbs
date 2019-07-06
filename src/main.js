import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import api from './config/api/api'
// 引入 axios 的默认值
import axios from 'axios'
// 引入 store/index.js 的默认值
import store from './store'

// 将 axios 添加到 Vue.prototype 上，使其在实例内部的所有组件中可用
Vue.prototype.$axios = axios
Vue.prototype.api = api
Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 注入 store
  store,
  render: h => h(App)
});
