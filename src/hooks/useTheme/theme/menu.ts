/*
 * 菜单栏主题配置
 * */

import type { Theme } from '@/hooks/typing'
import { ThemeTypeEnum } from '@/constants'

export const menuTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  [ThemeTypeEnum.Light]: {
    '--el-menu-bg-color': '#ffffff',
    '--el-menu-hover-bg-color': '#cccccc',
    '--el-menu-active-bg-color': 'var(--el-color-primary-light-9)',
    '--el-menu-text-color': '#333333',
    '--el-menu-active-color': 'var(--el-color-primary)',
    '--el-menu-hover-text-color': '#333333',
    '--el-menu-horizontal-sub-item-height': '50px'
  },
  [ThemeTypeEnum.Dark]: {
    '--el-menu-bg-color': '#141414',
    '--el-menu-hover-bg-color': '#000000',
    '--el-menu-active-bg-color': '#000000',
    '--el-menu-text-color': '#bdbdc0',
    '--el-menu-active-color': '#ffffff',
    '--el-menu-hover-text-color': '#ffffff',
    '--el-menu-horizontal-sub-item-height': '50px'
  },
  [ThemeTypeEnum.Inverted]: {
    '--el-menu-bg-color': '#191a20',
    '--el-menu-hover-bg-color': '#000000',
    '--el-menu-active-bg-color': '#000000',
    '--el-menu-text-color': '#bdbdc0',
    '--el-menu-active-color': '#ffffff',
    '--el-menu-hover-text-color': '#ffffff',
    '--el-menu-horizontal-sub-item-height': '50px'
  }
}
