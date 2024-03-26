declare type Recordable<T = any> = Record<string, T>;
declare type Nullable<T> = T | null;

declare namespace Menu {
    interface MetaProps {
        // 菜单图标
        icon: string

        /// 菜单标题
        title: string

        // 是否在菜单中隐藏，需要高亮的路由 path（通常用作详情页高亮父级菜单）
        activeMenu?: string

        // 是否是外部链接
        isLink?: string

        // 是否在菜单中隐藏（通常列表详情页面需要隐藏）
        isHide: boolean

        // 此菜单对应的页面是否全屏（如：数据大屏页面）
        isFull: boolean

        // 菜单是否需要固定在标签页中（通常固定首页）
        isAffix: boolean

        // 是否缓存
        isKeepAlive: boolean
    }
    interface MenuOptions {
        // 路由访问路径
        path: string

        // 路由 name
        name: string

        // 视图文件
        component?: string | (() => Promise<unknown>)

        // 重定向
        redirect?: string

        // 元信息
        meta: MetaProps

        // 子路由
        children?: MenuOptions[]
    }
}
