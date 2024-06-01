import http from '@/utils/http'

export function loginApi({ username, password }: Login.Params) {
  return http.post<User.Info>(`login/`, { username, password })
}

export function logoutApi(userId: string) {
  return http.delete(`/login/${userId}`, {})
}

export function getAuthMenuListApi(username: string) {
  return http.get<Menu.MenuOptions[]>(`${username}MenuList`, {})
}

export function getDepartmentApi() {
  return http.get<User.DepartmentRes[]>('department', {})
}
