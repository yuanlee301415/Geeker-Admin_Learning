import type { KeepAliveStore } from '#/store'
import { defineStore } from 'pinia'

export const useKeepAliveStore = defineStore({
  id: 'keepAlive',
  state: (): KeepAliveStore => ({
    keepAliveNames: []
  }),
  actions: {
    addName(name: string) {
      if (!this.keepAliveNames.includes(name)) {
        this.keepAliveNames.push(name)
      }
    },
    removeName(name: string) {
      this.keepAliveNames = this.keepAliveNames.filter((_) => _ !== name)
    },
    setKeepAliveNames(names: string[]) {
      this.keepAliveNames = names
    }
  }
})
