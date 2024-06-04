/*
 * 长按 指令
 * */

import type { Directive, DirectiveBinding } from 'vue'

const longpress: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') throw 'callback must be a function'

    let pressTimer: any = null

    // 创建计时器
    const start = (e: any) => {
      if (e.button !== 0 && e.type === 'click') return

      if (pressTimer !== null) return

      pressTimer = setTimeout(() => {
        handler(e)
      }, 2000)
    }

    // 取消计时器
    const cancel = () => {
      clearTimeout(pressTimer)
      pressTimer = null
    }

    // 添加事件
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)

    // 移除事件
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)

    function handler(e: MouseEvent | TouchEvent) {
      binding.value(e)
    }
  }
}

export default longpress
