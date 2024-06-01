// 用户状态
import type { UserStore } from '#/store'

import { defineStore } from 'pinia'
import { pinaPersistConfig } from '@/store/helper/persist'

const ID = 'user'

export const useUserStore = defineStore({
  id: ID,
  state: (): UserStore => ({
    info: {
      id: '',
      username: '',
      password: ''
    },
    token: ''
  }),

  actions: {
    setUserInfo(userInfo: UserStore['info']) {
      this.info = userInfo
    },
    setToken(token: UserStore['token']) {
      this.token = token
    }
  },
  persist: pinaPersistConfig(ID)
})
