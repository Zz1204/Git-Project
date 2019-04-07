// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// flex布局库
import 'flex.css'
// axios
import axios from '@/plugin/axios'
export default {
  async install(Vue) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    // 请求
    Vue.prototype.$http = axios
    // Element
    Vue.use(ElementUI)
  }
}
