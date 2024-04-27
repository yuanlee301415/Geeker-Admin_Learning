import type { App, Directive } from 'vue'

import copy from './modules/copy'

const directiveList: {
  [key: string]: Directive
} = {
  copy
}

const directives = {
  install(app: App<Element>) {
    Object.keys(directiveList).forEach((key) => {
      app.directive(key, directiveList[key])
    })
  }
}

export default directives
