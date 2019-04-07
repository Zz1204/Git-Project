<template>
  <div class="theme-layout-group">
    <div class="layout-group--header-box" flex="dir: top;cross:center">
      <div class="header-logo">财务管理系统</div>
      <div class="header-right" flex-box="1" flex>
        <menu-header flex-box="1" />
        <div class="header-user">
          <header-user class="header-user" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menuHeader from './components/menu-header'
import headerUser from './components/header-user'
export default {
  name: 'layout-header-aside',
  components: {
    menuHeader,
    headerUser
  }
}
</script>
<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
