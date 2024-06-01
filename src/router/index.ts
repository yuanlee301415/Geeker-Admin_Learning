import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/config/nprogress'
import { useAuthStore } from '@/store/modules/auth'
import { staticRoutes, errorRoutes } from './modules/staticRoutes'
import { initDynamicRouter } from './modules/dynamicRoutes'
import { LOGIN_URL } from '@/constants'
import { useUserStore } from '@/store/modules/user'
import { ROUTER_WHITE_LIST } from '@/config'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...errorRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(async (to, from, next) => {
  const title = import.meta.env.VITE_APP_TITLE
  const authStore = useAuthStore()
  const userStore = useUserStore()

  // 路由开始
  NProgress.start()

  // 设置页面标题
  document.title = (to.meta.title ? to.meta.title + ' - ' : '') + title

  // 判断是否登录
  if (to.path.toLowerCase() === LOGIN_URL) {
    if (userStore.token) {
      console.log('已登录')
      return next(false)
    }
    resetRouter()
    return next()
  }

  // 判断访问页面，是否路由白名单中；如果存在直接放行
  if (ROUTER_WHITE_LIST.includes(to.path)) return next()

  // 判断是否有 Token，没有则重定向到登录页
  if (!userStore.token) {
    console.log('未登录')
    return next({ path: LOGIN_URL, replace: true })
  }

  // 判断是否有菜单权限数据；没有则请求数据并添加动态路由
  if (!authStore.authMenuListGet.length) {
    await initDynamicRouter()
    return next({ ...to, replace: true })
  }

  // 正常访问
  next()
})

/**
 * 路由完成
 */
router.afterEach(() => {
  NProgress.done()
})

/**
 * 路由错误
 */
router.onError((error) => {
  NProgress.done()
  console.error('路由错误：\n', error.message)
})

/**
 * 重置路由
 */
function resetRouter() {
  const authStore = useAuthStore()
  authStore.flatMenuListGet.forEach((route) => {
    router.hasRoute(route.name) && router.removeRoute(route.name)
  })
}

export default router
export { initDynamicRouter }
