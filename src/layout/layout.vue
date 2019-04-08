<template>
  <div class="theme-layout-group">
    <!-- 顶栏 -->
    <div class="layout-group--header-box" flex="dir: top;cross:center">
      <div
        class="header-logo"
        :style="{ width: asideCollapse ? asideWidthCollapse : asideWidth }"
      >
        财务管理系统
      </div>
      <div class="header-right" flex-box="1" flex>
        <menu-header flex-box="1" />
        <div class="header-user">
          <header-user class="header-user" />
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="layout-group--container" flex-box="1" flex>
      <!-- 侧边栏 -->
      <div
        class="aside-box"
        flex-box="0"
        ref="aside"
        :style="{ width: asideCollapse ? asideWidthCollapse : asideWidth }"
      >
        <menu-aside />
      </div>
      <!-- 主体 -->
      <div class="layout-container-main" flex-box="1" flex="dir:top">
        <transition name="fade-scale">
          <div class="layout-container-main-layer">
            <div class="layout-container-main--header" flex-box="0">tab</div>
            <div class="layout-container-main--body" flex-box="1">
              <transition name="fade-transverse">
                <router-view />
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import menuHeader from './components/menu-header'
import headerUser from './components/header-user'
import menuAside from './components/menu-aside'
import { mapState } from 'vuex'
export default {
  name: 'layout-header-aside',
  components: {
    menuHeader,
    headerUser,
    menuAside
  },
  data() {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState('admin', {
      asideCollapse: state => state.menu.asideCollapse
    })
  }
}
</script>
<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
