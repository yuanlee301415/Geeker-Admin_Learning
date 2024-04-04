/*侧边栏主题配置*/
import type { Theme } from '@/hooks/typing'
import { ThemeTypeEnum } from '@/constants'

export const asideTheme: Record<Theme.ThemeType, { [key: string]: string }> = {
  [ThemeTypeEnum.Light]: {
    '--el-aside-logo-text-color': '#303133',
    '--el-aside-border-color': '#e4e7ed'
  },
  [ThemeTypeEnum.Dark]: {
    '--el-aside-logo-text-color': '#dadada',
    '--el-aside-border-color': '#414243'
  },
  [ThemeTypeEnum.Inverted]: {
    '--el-aside-logo-text-color': '#dadada',
    '--el-aside-border-color': '#414243'
  }
}
