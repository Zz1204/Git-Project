<template>
  <div class="layout-aside">
    <el-menu
      :collapse="asideCollapse"
      :unique-opened="true"
      :default-active="active"
      ref="menu"
      @select="handleMenuSelect"
    >
      <template v-for="(menu, menuIndex) in aside">
        <menu-item
          v-if="menu.children === undefined"
          :menu="menu"
          :key="menuIndex"
        />
        <menu-sub v-else :menu="menu" :key="menuIndex" />
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import menuMixin from '../mixin/menu'
import BScroll from 'better-scroll'
import menuItem from '../components/menu-item'
import menuSub from '../components/menu-sub'
export default {
  name: 'menu-aside',
  mixins: [menuMixin],
  components: {
    menuItem,
    menuSub
  },
  data() {
    return {
      active: '',
      asideHeight: 300,
      BS: null
    }
  },
  computed: {
    ...mapState('admin/menu', ['aside', 'asideCollapse'])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse() {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    // 监听路由 控制侧边栏激活状态
    $route: {
      handler({ fullPath }) {
        this.active = fullPath
        this.$nextTick(() => {
          if (this.aside.length > 0 && this.$refs.menu) {
            this.$refs.menu.activeIndex = fullPath
          }
        })
      },
      immediate: true
    }
  },
  mounted() {
    this.scrollInit()
  },
  beforeDestroy() {
    this.scrollDestroy()
  },
  methods: {
    scrollInit() {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true
        // 如果你愿意可以打开显示滚动条
        // scrollbar: {
        //   fade: true,
        //   interactive: false
        // }
      })
    },
    scrollDestroy() {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
</script>
