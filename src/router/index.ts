import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const navigableRoutes: RouteRecordRaw[] = [
  {
    path: '/vessels',
    name: 'Vessels',
    component: () => import('@/views/VesselsView.vue'),
    alias: '/'
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('@/views/StatsView.vue')
  },
  { path: '/help', name: 'Help', component: () => import('@/views/HelpView.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    },
    ...navigableRoutes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
