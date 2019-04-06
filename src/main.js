// Vue
import Vue from 'vue'
import App from './App.vue'
// 核心插件
import admin from '@/plugin/main'
// 路由
import router from './router'
// store
import store from './store'

// 核心插件
Vue.use(admin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
