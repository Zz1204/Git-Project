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
import { menuHeader, menuAside } from '@/menu'
// 核心插件
Vue.use(admin)
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.commit('admin/menu/headerSet', menuHeader)
  },
  mounted() {
    this.$store.commit('admin/theme/dom', 'd2')
  },
  watch: {
    // 监听路由 控制侧边栏显示
    '$route.matched'(val) {
      const _side = menuAside.filter(menu => menu.path === val[0].path)
      this.$store.commit(
        'admin/menu/asideSet',
        _side.length > 0 ? _side[0].children : []
      )
    }
  }
}).$mount('#app')
