import type { RouteRecordRaw } from 'vue-router'

import { HOME_URL } from '@/config'

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_URL
  },

  {
    path: '/layout',
    name: 'Layout',
    component: () => import('@/layouts/index.vue'),
    redirect: HOME_URL,
    children: []
  }
]

export const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '403 页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '403 页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/error/500.vue'),
    meta: {
      title: '500 页面'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue')
  }
]
