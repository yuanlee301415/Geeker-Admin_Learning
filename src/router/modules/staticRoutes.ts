import type { RouteRecordRaw } from 'vue-router'

import { HOME_URL, ERROR_403_URL, ERROR_404_URL, ERROR_500_URL } from '@/constants'

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_URL
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
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
    path: ERROR_403_URL,
    name: '403',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '403 页面'
    }
  },
  {
    path: ERROR_404_URL,
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '403 页面'
    }
  },
  {
    path: ERROR_500_URL,
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
