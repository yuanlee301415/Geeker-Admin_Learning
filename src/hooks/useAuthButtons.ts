/*
 * 按钮权限
 * */

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/store/modules'

// 按钮权限 Hook
export function useAuthButtons() {
  const route = useRoute()
  const authStore = useAuthStore()
  const authButtons = authStore.authButtonListGet[route.name as string] || []
  const BUTTONS = computed(() => {
    const currPageAuthButton: { [key: string]: boolean } = {}
    authButtons.forEach((item: string) => {
      currPageAuthButton[item] = true
    })
    return currPageAuthButton
  })
  return {
    BUTTONS
  }
}
