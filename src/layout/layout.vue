<template>
  <div>
    <menu-header />
  </div>
</template>
<script>
import menuHeader from './components/menu-header'
export default {
  name: 'layout-header-aside',
  components: {
    menuHeader
  }
}
</script>
<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
