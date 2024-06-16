/*
 * 指令
 * */

import type { App, Directive } from 'vue'

import copy from './modules/copy'
import waterMark from './modules/waterMark'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import longpress from './modules/longpress'
import auth from './modules/auth'

const directiveList: {
  [key: string]: Directive
} = {
  copy,
  waterMark,
  draggable,
  debounce,
  throttle,
  longpress,
  auth
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directiveList).forEach((key) => {
      app.directive(key, directiveList[key])
    })
  }
}

export default directives
