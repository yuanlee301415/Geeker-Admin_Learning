/* 自定义 节流 指令 */
import type { Directive, DirectiveBinding } from 'vue'

type ElType = HTMLElement & {
  __handleClick__: () => void
}

const throttle: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    let now: number = Date.now()
    el.__handleClick__ = handleClick
    el.addEventListener('click', handleClick)

    function handleClick() {
      if (typeof binding.value !== 'function') throw 'callback must be a function'

      if (Date.now() - now < 1000) {
        return
      }
      now = Date.now()
      binding.value()
    }
  },
  beforeMount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default throttle
