/* 自定义 防抖 指令 */
import type { Directive, DirectiveBinding } from 'vue'

type ElType = HTMLElement & {
  __handleClick__: () => void
}

const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    let timer: number
    el.__handleClick__ = handleClick
    el.addEventListener('click', handleClick)

    function handleClick() {
      if (typeof binding.value !== 'function') throw 'callback must be a function'

      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    }
  },
  beforeMount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default debounce
