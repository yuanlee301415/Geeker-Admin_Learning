import type { TabItem, TabsStore } from '#/store'
import { defineStore } from 'pinia'
import { useKeepAliveStore } from '@/store/modules/keepAlive'
import { pinaPersistConfig } from '@/store/helper/persist'
import router from '@/router'

const keepAliveStore = useKeepAliveStore()
const ID = 'tabs'

export const useTabsStore = defineStore({
  id: ID,
  state: (): TabsStore => ({
    tabs: []
  }),

  getters: {
    /**
     * 是否可以关闭左侧
     * @param state
     */
    canCloseLeftSide: (state) => {
      return (path: string) => {
        for (const tab of state.tabs) {
          if (tab.path === path) break
          if (!tab.closeable) continue
          return true
        }
      }
    },

    /**
     * 是否可以关闭右侧
     * @param state
     */
    canCloseRightSide: (state) => {
      return (path: string) => {
        for (let i = state.tabs.length - 1; i >= 0; i--) {
          const tab = state.tabs[i]
          if (tab.path === path) break
          if (!tab.closeable) continue
          return true
        }
      }
    },

    /**
     * 是否可以关闭其他
     * @param state
     */
    canCloseOthers: (state) => {
      return (path?: string) => {
        for (let i = 0; i < state.tabs.length - 1; i++) {
          const tab = state.tabs[i]
          if (tab.path === path || !tab.closeable) continue
          return true
        }
      }
    }
  },

  actions: {
    /**
     * 添加标签
     * @param {TabItem} tabItem
     */
    addTab(tabItem: TabItem) {
      // console.log('addTab>tabItem:', tabItem)
      if (this.tabs.every((_) => _.path !== tabItem.path)) {
        this.tabs.push(tabItem)
      }
      if (tabItem.isKeepAlive && !keepAliveStore.keepAliveNames.includes(tabItem.path)) {
        keepAliveStore.addName(tabItem.path)
      }
    },

    /**
     * 移除标签
     * @param path
     * @param [isCurrent=false] 是否关闭当前标签页
     */
    removeTab(path: string, isCurrent: boolean = false) {
      // 设置下一个激活的标签
      if (isCurrent) {
        this.tabs.forEach((_, idx) => {
          if (_.path !== path) return
          const nextTab = this.tabs[idx + 1] || this.tabs[idx - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }
      // 移除页面缓存
      const tabItem = this.tabs.find((_) => _.path === path)
      tabItem?.isKeepAlive && keepAliveStore.removeName(tabItem.path)

      // 移除标签
      this.tabs = this.tabs.filter((_) => _.path !== path)
    },

    /**
     * 设置标签
     * @param {TabItem[]} tabs
     */
    setTabs(tabs: TabItem[]) {
      this.tabs = tabs
    },

    /**
     * 关闭左侧标签
     * @param path
     */
    closeLeftSide(path: string) {
      const idx = this.tabs.findIndex((_) => _.path === path)
      if (idx === -1) return
      const removeTabs = this.tabs.slice(0, idx).filter((_) => _.closeable)
      removeTabs.forEach((_) => {
        this.removeTab(_.path)
      })
    },

    /**
     * 关闭右侧标签
     * @param path
     */
    closeRightSide(path: string) {
      const idx = this.tabs.findIndex((_) => _.path === path)
      if (idx === -1) return
      const removeTabs = this.tabs.slice(idx + 1).filter((_) => _.closeable)
      removeTabs.forEach((_) => {
        this.removeTab(_.path)
      })
    },

    /**
     * 关闭多个标签
     * @param path
     */
    closeTabs(path?: string) {
      const removeTabs = this.tabs.filter((_) => _.path !== path && _.closeable)
      removeTabs.forEach((_) => {
        this.removeTab(_.path)
      })
    }
  },

  persist: pinaPersistConfig(ID)
})
