import layout from '@/layout'
const meta = { auth: true }

export default {
  path: '/agent',
  name: 'agent',
  meta,
  redirect: { name: 'agent-contract-manage' },
  component: layout,
  children: (pre => [
    {
      path: 'contract/manage',
      name: `${pre}contract-manage`,
      component: () => import('@/views/agent/contract/manage'),
      meta: { ...meta, title: '合同管理' }
    },
    {
      path: 'contract/count',
      name: `${pre}contract-count`,
      component: () => import('@/views/agent/contract/count'),
      meta: { ...meta, title: '合同统计' }
    }
  ])('agent-')
}
