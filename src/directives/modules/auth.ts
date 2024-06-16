/*
 * 按钮权限
 * */

import type { Directive, DirectiveBinding } from 'vue'

import { useAuthStore } from '@/store/modules'

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const authStore = useAuthStore()
    const currPageRoles = authStore.authButtonListGet[authStore.routeName] ?? []
    if (value instanceof Array && value.length) {
      const hasPermission = value.every((v) => currPageRoles.includes(v))
      if (!hasPermission) el.remove()
    } else {
      if (!currPageRoles.includes(value)) el.remove()
    }
  }
}

export default auth
