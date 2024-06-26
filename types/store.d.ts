/*
* 状态
* */

import type {RouteRecordName} from "vue-router";

import {AssemblySize, Language, Layout} from "@/constants";

/*全局 Store*/
export interface GlobalStore {
    isCollapse: boolean
    assemblySize: AssemblySize
    language: Language | null
    asideInverted: boolean
    headerInverted: boolean
    primary: string
    isDark: boolean
    isGrey: boolean
    isWeak: boolean
    accordion: boolean
    breadcrumb: boolean
    breadcrumbIcon: boolean
    tabs: boolean
    tabsIcon: boolean
    footer: boolean
    layout: Layout
    maximize: boolean
}


/*权限 Store*/
export interface AuthStore {
    routeName: string
    authMenuList: Menu.MenuOptions[]
    authButtonList: {
        [key: string]: string[]
    }
}

/*页面缓存 Store*/
export interface KeepAliveStore {
    keepAliveNames: string[]
}

/*标签页 Store*/
export interface TabItem {
    icon: string
    title: string
    path: string
    name: RouteRecordName
    closeable: boolean
    isKeepAlive: boolean
}

/*标签栏 Store*/
export interface TabsStore {
    tabs: TabItem[]
}

/*用户 Store*/
export interface UserStore {
    info: User.Info
    token: string
}
