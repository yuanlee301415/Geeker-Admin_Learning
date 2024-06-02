import type { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const config = {
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30000,
  withDefaults: true
}

class RequestHttp {
  service: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    this.service.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (error: AxiosError) => {
        if (error.message.includes('timeout')) ElMessage.error('请求超时！请您稍后重试')
        else if (error.message.includes('Network Error')) ElMessage.error('网络错误！请您稍后重试')
        return Promise.reject(error)
      }
    )
  }

  get<T>(url: string, params: object, config: object = {}): Promise<T> {
    return this.service.get(url, { params, ...config })
  }

  post<T>(url: string, data: object, config: object = {}): Promise<T> {
    return this.service.post(url, data, config)
  }

  put<T>(url: string, data: object, config: object = {}): Promise<T> {
    return this.service.put(url, data, config)
  }

  patch<T>(url: string, data: object, config: object = {}): Promise<T> {
    return this.service.patch(url, data, config)
  }

  delete<T>(url: string, params: object, config: object = {}): Promise<T> {
    return this.service.delete(url, { params, ...config })
  }

  download<T>(url: string, params: object, config: object = {}): Promise<T> {
    return this.service.get(url, { params, ...config, responseType: 'blob' })
  }
}

export default new RequestHttp(config)
