/*
 * 接口请求 & 配置
 * */

import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import axios from 'axios'
import { ElMessage } from 'element-plus'
import { openFullScreenLoading, closeFullScreenLoading } from '@/utils/fullScreenLoading'
import { AxiosCanceler } from './helper/axiosCancel'

export interface RequestConfig extends InternalAxiosRequestConfig {
  // 是否开启：全屏 Loading 效果
  loading?: boolean

  // 是否取消重复请求
  cancel?: boolean

  // 生成的本次请求的 Key
  pendingKey?: string
}

const config = {
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30000,
  withDefaults: true
}

const axiosCanceler = new AxiosCanceler()

class RequestHttp {
  service: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    // 请求拦截器
    this.service.interceptors.request.use((config: RequestConfig) => {
      config.loading ??= true
      // 全屏 Loading 效果
      config.loading && openFullScreenLoading()

      // 在 api 服务中通过指定的第三个参数: { cancel: false } 来控制是否需要取消重复请求
      config.cancel ??= true
      config.cancel && axiosCanceler.addPending(config)
      return config
    })

    // 响应拦截器
    this.service.interceptors.response.use(
      (res: AxiosResponse & { config: RequestConfig }) => {
        const { config, data } = res
        config.loading && closeFullScreenLoading()
        axiosCanceler.removePending(config)
        return data
      },
      (error: AxiosError) => {
        if (error.message.includes('timeout')) ElMessage.error('请求超时！请您稍后重试')
        else if (error.message.includes('Network Error')) ElMessage.error('网络错误！请您稍后重试')
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params?: object, config?: object): Promise<T> {
    // `...config` 解构出来的额外配置，会原样传递给 Axios 请求实例的 `config`(如：自定义的 `loading` 配置，后续可以在拦截器的 `config` 中直接获取到)
    return this.service.get(url, { params, ...config })
  }

  post<T>(url: string, data?: object, config?: object): Promise<T> {
    return this.service.post(url, data, config)
  }

  put<T>(url: string, data?: object, config?: object): Promise<T> {
    return this.service.put(url, data, config)
  }

  patch<T>(url: string, data?: object, config?: object): Promise<T> {
    return this.service.patch(url, data, config)
  }

  delete<T>(url: string, params?: object, config?: object): Promise<T> {
    return this.service.delete(url, { params, ...config })
  }

  download<T>(url: string, params?: object, config?: object): Promise<T> {
    return this.service.get(url, { params, ...config, responseType: 'blob' })
  }
}

export default new RequestHttp(config)
