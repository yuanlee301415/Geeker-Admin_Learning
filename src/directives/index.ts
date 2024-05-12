import type { App, Directive } from 'vue'

import copy from './modules/copy'
import waterMark from './modules/waterMark'
import draggable from './modules/draggable'
import debounce from './modules/debounce'
import throttle from './modules/throttle'

const directiveList: {
  [key: string]: Directive
} = {
  copy,
  waterMark,
  draggable,
  debounce,
  throttle
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directiveList).forEach((key) => {
      app.directive(key, directiveList[key])
    })
  }
}

export default directives
