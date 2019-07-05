import Vue from 'vue'
import Router from 'vue-router'
// 引入 ./routes.js 的默认值
import routes from './routes'

Vue.use(Router);
const router =  new Router({
  mode: 'history',
  routes
});
export default router
