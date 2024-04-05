import type { RouteRecordRaw } from 'vue-router'

import { useAuthStore } from '@/store/modules/auth'
import router from '../index'

const modules = import.meta.glob('@/views/**/*.vue')

export async function initDynamicRouter() {
  const authStore = useAuthStore()

  try {
    await authStore.getAuthMenuList()

    // 添加动态路由
    console.log('authStore.flatMenuListGet:', authStore.flatMenuListGet)
    authStore.flatMenuListGet.forEach((item) => {
      delete item.children
      if (typeof item.component === 'string') {
        item.component = modules['/src/views' + item.component + '.vue']
      }
      if (item.meta.isFull) {
        router.addRoute(item as unknown as RouteRecordRaw)
      } else {
        router.addRoute('Layout', item as unknown as RouteRecordRaw)
      }
    })
  } catch (e) {
    return Promise.reject(e)
  }
}
