export default {
  path: '/agent',
  title: '代理服务系统',
  icon: 'globe',
  children: (pre => [
    {
      path: `${pre}contract`,
      title: '合同管理',
      icon: 'home',
      children: [
        { path: `${pre}contract/manage`, title: '合同管理' },
        { path: `${pre}contract/count`, title: '合同统计' }
      ]
    }
  ])('/agent/')
}
