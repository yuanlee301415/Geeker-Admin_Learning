// 全局状态
import type {GlobalStore} from "#/store";
import {defineStore} from "pinia";
import pinaPersistConfig from "@/store/helper/persist";
import {AssemblySize, Language, Layout} from "@/constants";
import {DEFAULT_PRIMARY} from "@/config";

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
        layout: Layout.Vertical
    }),
    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        setAssemblySize(size: AssemblySize) {
            this.assemblySize = size
        },
        setLanguage(language: Language) {
            this.language = language
        },
        setLayout(layout: Layout) {
            this.layout = layout
        },
        setPrimary(color: string) {
            this.primary = color
        },
        setIsGrey(val: boolean) {
            this.isGrey = val
        },
        setIsWeak(val: boolean) {
            this.isWeak = val
        }
    },
    persist: pinaPersistConfig(ID)
})
