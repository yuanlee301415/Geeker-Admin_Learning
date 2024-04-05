import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/config/nprogress'
import { useAuthStore } from '@/store/modules/auth'
import { staticRoutes, errorRoutes } from './modules/staticRoutes'
import { initDynamicRouter } from './modules/dynamicRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...errorRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach(async (to, from, next) => {
  const title = import.meta.env.VITE_APP_TITLE
  const authStore = useAuthStore()

  document.title = (to.meta.title ?? '') + title
  NProgress.start()

  if (!authStore.authMenuListGet.length) {
    await initDynamicRouter()
    return next({ ...to, replace: true })
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.onError((error) => {
  console.error('路由错误：\n', error.message)
})

export default router
