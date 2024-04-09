// 全局状态
import type { GlobalStore } from '#/store'
import { defineStore } from 'pinia'
import { pinaPersistConfig } from '@/store/helper/persist'
import { AssemblySize, Language, Layout } from '@/constants'
import { DEFAULT_PRIMARY } from '@/config'

const ID = 'global'
export const useGlobalStore = defineStore({
  id: ID,

  state: (): GlobalStore => ({
    // 菜单折叠
    isCollapse: false,

    // ElementPlus 组件大小
    assemblySize: AssemblySize.Default,

    // ElementPlus 语言
    language: null,

    // 侧边栏颜色反转
    asideInverted: false,

    // 头部颜色反转
    headerInverted: false,

    // 主题颜色
    primary: DEFAULT_PRIMARY,

    // 深色模式
    isDark: false,

    // 灰色模式
    isGrey: false,

    // 色弱模式
    isWeak: false,

    // 菜单手风琴
    accordion: true,

    // 面包屑
    breadcrumb: true,

    // 面包屑图标
    breadcrumbIcon: true,

    // 标签栏
    tabs: true,

    // 标签栏图标
    tabsIcon: true,

    // 页脚
    footer: true,

    // 布局方式
    layout: Layout.Vertical,

    // 当前页面是否全屏
    maximize: false
  }),

  actions: {
    /**
     * @description 切换菜单折叠
     */
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },

    /**
     * @description 设置组件大小
     * @param {AssemblySize} size
     */
    setAssemblySize(size: AssemblySize) {
      this.assemblySize = size
    },

    /**
     * @description 设置语言
     * @param {Language} language
     */
    setLanguage(language: Language) {
      this.language = language
    },

    /**
     * @description 设置布局方式
     * @param {Layout} layout
     */
    setLayout(layout: Layout) {
      this.layout = layout
    },

    /**
     * @description 设置主题颜色
     * @param {string} color
     */
    setPrimary(color: string) {
      this.primary = color
    },

    /**
     * @description 设置灰色模式
     * @param {boolean} val
     */
    setIsGrey(val: boolean) {
      this.isGrey = val
    },

    /**
     * @description 设置色弱模式
     * @param {boolean} val
     */
    setIsWeak(val: boolean) {
      this.isWeak = val
    },

    /**
     * @description 切换全屏
     */
    toggleMaximize() {
      this.maximize = !this.maximize
    }
  },

  /**
   * @description 持久化配置
   */
  persist: pinaPersistConfig(ID)
})
