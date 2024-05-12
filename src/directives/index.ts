import type { App, Directive } from 'vue'

import copy from './modules/copy'
import waterMark from './modules/waterMark'
import draggable from './modules/draggable'
import debounce from './modules/debounce'

const directiveList: {
  [key: string]: Directive
} = {
  copy,
  waterMark,
  draggable,
  debounce
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directiveList).forEach((key) => {
      app.directive(key, directiveList[key])
    })
  }
}

export default directives
