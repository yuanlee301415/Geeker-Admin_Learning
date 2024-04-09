import type { KeepAliveStore } from '#/store'
import { defineStore } from 'pinia'

export const useKeepAliveStore = defineStore({
  id: 'keepAlive',
  state: (): KeepAliveStore => ({
    keepAliveNames: []
  }),
  actions: {
    /**
     * @description Add keepAlive name
     * @param name
     */
    addName(name: string) {
      if (!this.keepAliveNames.includes(name)) {
        this.keepAliveNames.push(name)
      }
    },

    /**
     * @description Remove keepAlive name
     * @param name
     */
    removeName(name: string) {
      this.keepAliveNames = this.keepAliveNames.filter((_) => _ !== name)
    },

    /**
     * @description Set keepAlive name
     * @param names
     */
    setKeepAliveNames(names: string[]) {
      this.keepAliveNames = names
    }
  }
})
