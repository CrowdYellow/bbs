import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
