/*
 * 权限状态
 * */

import type { AuthStore } from '#/store'

import { defineStore } from 'pinia'
import { getAuthMenuListApi } from '@/api/modules/rights'
import { getAllBreadcrumbList, getFlatMenuList, getShowMenuList } from '@/utils'
import { useUserStore } from '@/store/modules/user'

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthStore => ({
    routeName: '',

    // 菜单权限列表
    authMenuList: []
  }),

  getters: {
    // 菜单权限列表
    authMenuListGet: (state) => state.authMenuList,

    // 过滤需要隐藏后的菜单数据
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),

    // 将所有菜单展开为一维数组后的数据
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),

    // 递归遍历菜单， 以每一个菜单项的 path 为键，菜单项为值的面包屑对象数据
    breadcrumbListGet: (state) => getAllBreadcrumbList(state.authMenuList)
  },

  actions: {
    /**
     * @description 获取后端返回的菜单数据
     */
    async getAuthMenuList() {
      const userStore = useUserStore()
      this.authMenuList = await getAuthMenuListApi(userStore.info.username)
      console.log('this.authMenuList:', this.authMenuList)
    }
  }
})
