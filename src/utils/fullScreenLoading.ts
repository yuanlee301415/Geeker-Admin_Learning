/*
 * 全屏 Loading
 * */

import { ElLoading } from 'element-plus'

let loadingInstance: ReturnType<typeof ElLoading.service>
let requestCount = 0

export function openFullScreenLoading() {
  if (requestCount == 0) {
    openLoading()
  }
  requestCount++
}

export function closeFullScreenLoading() {
  if (requestCount <= 0) return
  requestCount--
  if (requestCount === 0) {
    closeLoading()
  }
}

function openLoading() {
  loadingInstance = ElLoading.service({
    lock: true,
    background: 'rgb(0 0 0 / 70%)'
  })
}

function closeLoading() {
  loadingInstance.close()
}
