import type { InjectionKey } from 'vue'

export type refreshCurrentPageContext = (visible: boolean) => void

export const refreshCurrentPageKey: InjectionKey<refreshCurrentPageContext> =
  Symbol('refreshCurrentPage')
