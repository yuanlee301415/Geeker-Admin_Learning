/*
 * 请求去重
 * */

import type { RequestConfig } from '@/api'

const pendingMap = new Map<string | void, AbortController>()

/**
 * 相同请求，生成相同的 key
 */
export const getPendingKey = ({ method, url, data, params }: RequestConfig) => {
  // Bug: Axios 请求拦截器的 `config.data` 是对象类型；响应拦截器中的 `config.data` 已经被 Axios 序列化成了字符串
  // 为了统一 `data` 格式，使同一请求在请求和响应拦截器中生成相同的 key
  // 故：将 `config.data` 统一转换为字符串格式
  if (typeof data === 'object') data = JSON.stringify(data)
  return JSON.stringify({ href: location.href, method, url, data, params })
}

// 取消重复请求
export class AxiosCanceler {
  addPending(config: RequestConfig) {
    const ctrl = new AbortController()
    const key = getPendingKey(config)
    config.pendingKey = key
    config.signal = ctrl.signal
    this.removePending(config)
    pendingMap.set(key, ctrl)
  }

  removePending(config: RequestConfig) {
    const { pendingKey } = config
    const ctrl = pendingMap.get(pendingKey)
    ctrl && ctrl.abort()
    pendingMap.delete(pendingKey)
  }
}
