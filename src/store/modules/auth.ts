import type { AuthStore } from '#/store'
import { defineStore } from 'pinia'
import { getAuthMenuListApi } from '@/api/rights'
import { getFlatMenuList, getShowMenuList } from '@/utils'

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthStore => ({
    routeName: '',
    authMenuList: []
  }),

  getters: {
    // 原始后端响应的菜单数据
    authMenuListGet: (state) => state.authMenuList,

    // 过滤需要隐藏后的菜单数据
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),

    // 将所有菜单展开为一维数组后的数据
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList)
  },

  actions: {
    async getAuthMenuList() {
      this.authMenuList = await getAuthMenuListApi()
      console.log('this.authMenuList:', this.authMenuList)
    }
  }
})
