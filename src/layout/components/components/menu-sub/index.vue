<template>
  <el-submenu :index="menu.path || uniqueId">
    <template slot="title">
      <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
      <i
        v-if="(menu.icon === undefined) & !menu.iconSvg"
        class="fa fa-folder-o"
      ></i>
      <d2-icon-svg v-if="menu.iconSvg" :name="menu.iconSvg" />
      <span slot="title">{{ menu.title }}</span>
    </template>
    <template v-for="(child, childIndex) in menu.children">
      <menu-item
        v-if="child.children === undefined"
        :menu="child"
        :key="childIndex"
      />
      <d2-layout-header-aside-menu-sub v-else :menu="child" :key="childIndex" />
    </template>
  </el-submenu>
</template>

<script>
import { uniqueId } from 'lodash'
// 组件
import MenuItem from '../menu-item'

export default {
  name: 'menu-sub',
  components: {
    'menu-item': MenuItem
  },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      uniqueId: uniqueId('menu-empty-')
    }
  }
}
</script>
