<template>
  <el-menu-item :index="menu.path || uniqueId">
    <i v-if="menu.icon" :class="`fa fa-${menu.icon}`"></i>
    <i
      v-if="(menu.icon === undefined) & !menu.iconSvg"
      class="fa fa-file-o"
    ></i>
    <h-icon-svg v-if="menu.iconSvg" :name="menu.iconSvg"></h-icon-svg>
    <span slot="title">{{ menu.title || '未命名菜单' }}</span>
  </el-menu-item>
</template>
<script>
import { uniqueId } from 'lodash'
export default {
  name: 'menu-item',
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
