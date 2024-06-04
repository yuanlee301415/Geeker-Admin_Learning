/*
 * 复制 指令
 * */

import type { Directive, DirectiveBinding } from 'vue'

import { ElMessage } from 'element-plus'

interface ElType extends HTMLElement {
  copyText: string | number
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyText = binding.value
    el.addEventListener('click', handleClick)
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyText = binding.value
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', handleClick)
  }
}

async function handleClick(this: any) {
  console.dir(this)
  try {
    await navigator.clipboard.writeText(this.copyText)
    console.log('复制成功:\n', this.copyText)
  } catch (e) {
    console.error('复制失败：', e)
    ElMessage.error('复制操作不被支持或失败')
  }
  ElMessage.success('复制成功')
}

export default copy
