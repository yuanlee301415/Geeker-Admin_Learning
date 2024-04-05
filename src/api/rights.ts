import http from '@/utils/http'

export function getAuthMenuListApi() {
  return http.get<Menu.MenuOptions[]>('menuList', {})
}
