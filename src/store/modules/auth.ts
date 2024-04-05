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
    authMenuListGet: (state) => getShowMenuList(state.authMenuList),
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList)
  },

  actions: {
    async getAuthMenuList() {
      this.authMenuList = await getAuthMenuListApi()
      console.log('this.authMenuList:', this.authMenuList)
    }
  }
})
