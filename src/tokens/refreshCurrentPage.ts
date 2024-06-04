/*
 * 刷新当前页面 Key
 * */

import type { InjectionKey } from 'vue'

export type refreshCurrentPageContext = (visible: boolean) => void

export const refreshCurrentPageKey: InjectionKey<refreshCurrentPageContext> = Symbol('refreshCurrentPage')
