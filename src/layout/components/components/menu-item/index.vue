<template>
  <el-menu-item :index="menu.path || uniqueId">
    <h-icon v-if="menu.icon" :name="menu.icon"></h-icon>
    <h-icon
      v-if="(menu.icon === undefined) & !menu.iconSvg"
      name="file-o"
    ></h-icon>
    <h-icon-svg v-if="menu.svgIcon" :name="menu.svgIcon"></h-icon-svg>
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
