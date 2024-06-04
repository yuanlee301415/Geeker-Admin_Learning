/*
 * 权限 API
 * */

import http from '@/api'

// 登录
export function loginApi({ username, password }: Login.Params) {
  return http.post<User.Info>(`login/`, { username, password }, { loading: false })
}

/**
 * 登出
 * @param userId 用户 ID
 */
export function logoutApi(userId: string) {
  return http.delete(`/login/${userId}`)
}

/**
 * 菜单权限
 * @param username 用户名
 */
export function getAuthMenuListApi(username: string) {
  return http.get<Menu.MenuOptions[]>(`${username}MenuList`, void 0, { loading: false })
}

// 部门
export function getDepartmentApi() {
  return http.get<User.DepartmentRes[]>('department', void 0, { cancel: false })
}
