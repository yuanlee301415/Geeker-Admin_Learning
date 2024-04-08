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

  actions: {
    addTab(tabItem: TabItem) {
      // console.log('addTab>tabItem:', tabItem)
      if (this.tabs.every((_) => _.path !== tabItem.path)) {
        this.tabs.push(tabItem)
      }
      if (tabItem.isKeepAlive && !keepAliveStore.keepAliveNames.includes(tabItem.name)) {
        keepAliveStore.addName(tabItem.name)
      }
    },
    removeTab(tabPath: string, isCurrent: boolean) {
      // 设置下一个激活的标签
      if (isCurrent) {
        this.tabs.forEach((_, idx) => {
          // debugger
          if (_.path !== tabPath) return
          const nextTab = this.tabs[idx + 1] || this.tabs[idx - 1]
          if (!nextTab) return
          router.push(nextTab.path)
        })
      }
      // 移除页面缓存
      const tabItem = this.tabs.find((_) => _.path === tabPath)
      tabItem?.isKeepAlive && keepAliveStore.removeName(tabItem.name)

      // 移除标签
      this.tabs = this.tabs.filter((_) => _.path !== tabPath)
    },
    setTabs(tabs: TabItem[]) {
      this.tabs = tabs
    }
  },

  persist: pinaPersistConfig(ID)
})
