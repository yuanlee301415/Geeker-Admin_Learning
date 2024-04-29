import type { App, Directive } from 'vue'

import copy from './modules/copy'
import waterMark from './modules/waterMark'

const directiveList: {
  [key: string]: Directive
} = {
  copy,
  waterMark
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directiveList).forEach((key) => {
      app.directive(key, directiveList[key])
    })
  }
}

export default directives
