/*
 * ElForm 表单校验
 * */

// 手机号校验
export function validatePhoneNumber(rule: any, value: any, callback: any) {
  if (!value) {
    callback(new Error(rule.message ?? '手机号不能为空'))
    return
  }
  if (!/^1\d{10}$/.test(value)) {
    callback(new Error(rule.message ?? '请输入正确的手机号'))
    return
  }
  callback()
}
