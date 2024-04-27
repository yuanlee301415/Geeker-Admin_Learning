import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as Icons from '@element-plus/icons-vue'
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import I18n from './language/index'
import './assets/main.css'
import './assets/fonts/font.css'
import './assets/iconfont/iconfont.css'
import './styles/common.less'
import './styles/element.less'
import './styles/element-dark.less'

function bootstrap() {
  const app = createApp(App)

  // register the element Icons component
  Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons])
  })

  setupStore(app)

  app.use(router)
  app.use(ElementPlus)
  app.use(I18n)
  app.mount('#app')
}

bootstrap()
