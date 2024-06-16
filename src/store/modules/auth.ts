/*
 * 权限状态
 * */

import type { AuthStore } from '#/store'

import { defineStore } from 'pinia'
import { getAuthMenuListApi, getAuthButtonListApi } from '@/api/modules/rights'
import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'
import { useUserStore } from '@/store/modules'

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthStore => ({
    // 当前路由名称
    routeName: '',

    // 菜单权限列表
    authMenuList: [],

    // 按钮权限列表
    authButtonList: {}
  }),

  getters: {
    // 菜单权限列表
    authMenuListGet: (state) => state.authMenuList,

    // 按钮权限列表
    authButtonListGet: (state) => state.authButtonList,

    // 过滤需要隐藏后的菜单数据
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),

    // 将所有菜单展开为一维数组后的数据
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),

    // 递归遍历菜单， 以每一个菜单项的 path 为键，菜单项为值的面包屑对象数据
    breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList)
  },

  actions: {
    /**
     * @description 获取菜单权限数据
     */
    async getAuthMenuList() {
      const userStore = useUserStore()
      this.authMenuList = await getAuthMenuListApi(userStore.info.username)
      // console.log('this.authMenuList:', this.authMenuList)
    },

    /**
     * @description 获取按钮权限数据
     */
    async getAuthButtonList() {
      const userStore = useUserStore()
      this.authButtonList = await getAuthButtonListApi(userStore.info.username)
    },

    // 设置当前路由名称
    async setRouteName(name: string) {
      this.routeName = name
    }
  }
})
