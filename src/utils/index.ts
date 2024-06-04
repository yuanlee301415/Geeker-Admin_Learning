/*
 * 工具方法
 * */

import { Language } from '@/constants'

/*获取浏览器语言*/
export function getBrowserLanguage(): Language {
  const browserLanguage = window.navigator.language ? window.navigator.language : window.navigator.browserLanguage
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
  return _menuList.flatMap((item) => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
}

/**
 * 递归遍历菜单， 以每一个菜单项的 path 为键，菜单项为值的面包屑对象数据
 * @param menuList 菜单列表
 * @param parent 父级菜单
 * @param result 生成的结果
 */
export function getAllBreadcrumbList(menuList: Menu.MenuOptions[], parent: Menu.MenuOptions[] = [], result: Record<string, Menu.MenuOptions[]> = {}) {
  for (const item of menuList) {
    result[item.path] = [...parent, item]
    if (item.children) {
      getAllBreadcrumbList(item.children, result[item.path], result)
    }
  }
  return result
}

/**
 * @description 生成随机数
 * @param min 最小值
 * @param max 最大值
 */
export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (min - max) + max)
}

/**
 * @description 获取当前时间对应的提示语
 */
export function getTimeState() {
  const now = new Date()
  const hours = now.getHours()
  if (hours >= 6 && hours <= 10) return `早上好 ⛅`
  if (hours >= 10 && hours <= 14) return `中午好 🌞`
  if (hours >= 14 && hours <= 18) return `下午好 🌞`
  if (hours >= 18 && hours <= 24) return `晚上好 🌛`
  if (hours >= 0 && hours <= 6) return `凌晨好 🌛`
}
