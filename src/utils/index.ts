import { Language } from '@/constants'

/*获取浏览器语言*/
export function getBrowserLanguage(): Language {
  const browserLanguage = window.navigator.language
    ? window.navigator.language
    : window.navigator.browserLanguage
  return ['cn', 'zh', 'zh-cn'].includes(browserLanguage.toLowerCase()) ? Language.Zh : Language.En
}

/**
 * 递归过滤需要显示在菜单栏中的菜单项
 * @param menuList 菜单列表
 */
export function getShowMenuList(menuList: Menu.MenuOptions[]) {
  const _menuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
  return _menuList.filter((item) => {
    if (item.children?.length) {
      item.children = getShowMenuList(item.children)
    }
    return !item.meta?.isHide
  })
}

/**
 * 扁平化菜单列表
 * @param menuList 菜单列表
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  const _menuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList))
  return _menuList.flatMap((item) => [
    item,
    ...(item.children ? getFlatMenuList(item.children) : [])
  ])
}
