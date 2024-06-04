/* 自定义 背景水印 指令 */

import type { Directive, DirectiveBinding } from 'vue'

const waterMark: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    addWaterMark(el, binding.value)
  }
}

function addWaterMark(el: HTMLElement, { text, textColor, font }: { text: string; textColor: string; font: string }) {
  const canvas = document.createElement('canvas')
  el.appendChild(canvas)
  canvas.width = 205
  canvas.height = 140
  canvas.style.display = 'none'
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.rotate((-20 * Math.PI) / 180)
  ctx.font = font ?? '16px Microsoft YaHei'
  ctx.fillStyle = textColor ?? 'rgba(180, 180, 180, 0.3)'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 10, canvas.height / 2)
  el.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
  el.removeChild(canvas)
}

export default waterMark
