import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/dark/css-vars.css";
// element icons
import * as Icons from "@element-plus/icons-vue";

import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from '@/store'
import I18n from './language/index'
import './assets/main.css'
import './assets/iconfont/iconfont.css'
import './styles/common.less'

function bootstrap() {
  const app = createApp(App)

  // register the element Icons component
  Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
  });

  setupRouter(app)
  setupStore(app)

  app.use(ElementPlus)
  app.use(I18n)
  app.mount('#app')
}

bootstrap()
