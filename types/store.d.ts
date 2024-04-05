import {AssemblySize, Language, Layout} from "@/constants";

/*全局状态*/
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
}


/*权限状态*/
export interface AuthStore {
    routeName: string
    authMenuList: Menu.MenuOptions[]
}
