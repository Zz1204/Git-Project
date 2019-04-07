<template>
  <el-dropdown size="small" class="h-mr h-ml">
    <span class="btn-text">
      {{ info.name ? `你好 ${info.name}` : '未登录' }}
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="logOff">
        <h-icon name="power-off" class="h-mr-5" />
        注销
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  name: 'header-user',
  data() {
    return {
      info: {
        name: '哈哈哈哈'
      }
    }
  },
  methods: {
    logOff() {
      console.log('注销')
    }
  }
}
</script>
