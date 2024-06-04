/*
 * 国际化
 * */

import { createI18n } from 'vue-i18n'
import { getBrowserLanguage } from '@/utils'

import zh from './modules/zh'
import en from './modules/en'

const i18n = createI18n({
  allowComposition: true,
  legacy: false,
  locale: getBrowserLanguage(),
  messages: {
    zh,
    en
  }
})

export default i18n
