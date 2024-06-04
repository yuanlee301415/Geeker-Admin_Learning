import type { Theme } from '@/hooks/typing'
import { GreyOrWeakEnum, Layout, ThemeTypeEnum } from '@/constants'
import { useGlobalStore } from '@/store/modules'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

import { DEFAULT_PRIMARY } from '@/config'
import { getDarkColor, getLightColor } from '@/utils/color'
import { asideTheme } from './theme/aside'
import { menuTheme } from './theme/menu'
import { headerTheme } from './theme/header'

// 全局主题 Hook
export function useTheme() {
  const globalStore = useGlobalStore()
  const { asideInverted, isDark, isGrey, isWeak, layout, headerInverted, primary } =
    storeToRefs(globalStore)

  // 初始化主题
  function initTheme() {
    switchDark()
    if (isGrey.value) changeGreyOrWeak(GreyOrWeakEnum.Grey, true)
    if (isWeak.value) changeGreyOrWeak(GreyOrWeakEnum.Weak, true)
  }

  // 切换暗黑模式
  function switchDark() {
    document.documentElement.setAttribute('class', isDark.value ? 'dark' : '')
    changePrimary(primary.value)
    setAsideTheme()
    setHeaderTheme()
  }

  /**
   * 修改主题颜色
   * @param val 颜色
   */
  function changePrimary(val: string | null) {
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({ type: 'success', message: '主题颜色已重置为默认颜色' })
    }

    // 计算主题颜色变化
    setThemeProperty({
      '--el-color-primary': val
    })
    setThemeProperty({
      '--el-color-primary-dark-2': isDark.value
        ? `${getLightColor(val, 0.2)}`
        : `${getDarkColor(val, 0.3)}`
    })
    for (let i = 1; i <= 9; i++) {
      const primaryColor = isDark.value
        ? `${getDarkColor(val, i / 10)}`
        : `${getLightColor(val, i / 10)}`
      setThemeProperty({
        [`--el-color-primary-light-${i}`]: primaryColor
      })
    }
    globalStore.setPrimary(val)
  }

  // 设置头部样式
  function setHeaderTheme() {
    let type: Theme.ThemeType = ThemeTypeEnum.Light
    if (headerInverted.value) type = ThemeTypeEnum.Inverted
    if (isDark.value) type = ThemeTypeEnum.Dark
    setThemeProperty(headerTheme[type])
    setMenuTheme()
  }

  /**
   * 灰色和弱色切换
   * @param type 灰色/弱色
   * @param value 是否启用
   */
  function changeGreyOrWeak(type: Theme.GreyOrWeakType, value: boolean) {
    const body = document.body as HTMLElement
    if (!value) {
      body.removeAttribute('style')
      return
    }
    const styles: Record<Theme.GreyOrWeakType, string> = {
      grey: 'filter: grayscale(1)',
      weak: 'filter: invert(80%)'
    }
    body.setAttribute('style', styles[type])
    if (type === GreyOrWeakEnum.Grey) {
      globalStore.setIsWeak(false)
    } else {
      globalStore.setIsGrey(false)
    }
  }

  // 设置菜单栏主题
  function setMenuTheme() {
    let type: Theme.ThemeType = ThemeTypeEnum.Light
    if (layout.value === Layout.Transverse && headerInverted.value) type = ThemeTypeEnum.Inverted
    if (layout.value !== Layout.Transverse && asideInverted.value) type = ThemeTypeEnum.Inverted
    if (isDark.value) type = ThemeTypeEnum.Dark
    setThemeProperty(menuTheme[type])
  }

  // 设置侧边栏主题
  function setAsideTheme() {
    let type: Theme.ThemeType = ThemeTypeEnum.Light
    if (asideInverted.value) type = ThemeTypeEnum.Inverted
    if (isDark.value) type = ThemeTypeEnum.Dark
    setThemeProperty(asideTheme[type])
    setMenuTheme()
  }

  return {
    initTheme,
    switchDark,
    changePrimary,
    setAsideTheme,
    setHeaderTheme,
    changeGreyOrWeak
  }
}

/**
 * 设置 HTML 标签的 style 属性
 * @param theme 主题样式
 */
function setThemeProperty(theme: { [key: string]: string }) {
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(key, value)
  }
}
