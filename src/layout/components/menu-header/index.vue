<template>
  <div class="theme-header-menu" flex="cross: center">
    <div class="theme-header-menu--content" flex-box="1" flex>
      <div
        class="theme-header-menu--scroll"
        ref="scroll"
        flex-box="0"
        :style="'transform: translateX(' + currentTranslateX + 'px);'"
      >
        <el-menu
          mode="horizontal"
          :default-active="active"
          @select="handleMenuSelect"
        >
          <template v-for="(menu, menuIndex) in header">
            <menu-item :menu="menu" :key="menuIndex" />
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import menuItem from '../components/menu-item'
import menuMixin from '../mixin/menu'
export default {
  name: 'header-menu',
  mixins: [menuMixin],
  components: {
    menuItem
  },
  computed: {
    ...mapState('admin/menu', ['header'])
  },
  data() {
    return {
      active: '',
      isScroll: false,
      scrollWidth: 0,
      contentWidth: 0,
      currentTranslateX: 0,
      throttledCheckScroll: null
    }
  }
}
</script>
