// Vue
import Vue from 'vue'
import App from './App.vue'
// 核心插件
import admin from '@/plugin/main'
// 路由
import router from './router'
// store
import store from './store'
// 菜单
import { menuHeader } from '@/menu'
// 核心插件
Vue.use(admin)
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.commit('admin/menu/headerSet', menuHeader)
  }
}).$mount('#app')
