import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由数据
import routes from './routers'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 改变title
import util from '@/util/util'
Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()
  // 执行
  next()
})

router.afterEach(to => {
  // 关闭进度条
  NProgress.done()
  // 改变title
  util.title(to.meta.title)
})

export default router
