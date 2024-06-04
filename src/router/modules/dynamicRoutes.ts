/*
 * 动态路由
 * */

import type { RouteRecordRaw } from 'vue-router'

import { ElNotification } from 'element-plus'
import { useAuthStore } from '@/store/modules/auth'
import router from '../index'
import { useUserStore } from '@/store/modules/user'
import { LOGIN_URL } from '@/constants'

// 导入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')

// 初始化动态路由
export async function initDynamicRouter() {
  const authStore = useAuthStore()
  const userStore = useUserStore()

  try {
    // 1.获取菜单列表
    await authStore.getAuthMenuList()

    // 2.判断当前用户有没有菜单权限
    if (!authStore.authMenuListGet.length) {
      ElNotification({
        title: '无权限访问',
        message: '当前账号无任何菜单权限，请联系系统管理员！',
        type: 'warning',
        duration: 3000
      })
      userStore.setToken('')
      router.replace(LOGIN_URL)
      return Promise.reject('No permission')
    }

    // 3.添加动态路由
    console.log('dynamicRoutes>authStore.flatMenuListGet:', authStore.flatMenuListGet)
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
    ElNotification({
      message: '用户名或密码错误！', // 只模拟了 `admin` 和 `user` 两个帐号
      type: 'error',
      duration: 3000
    })
    userStore.setToken('')
    router.replace(LOGIN_URL)
    return Promise.reject(e)
  }
}
