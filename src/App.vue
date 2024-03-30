<template>
  <el-config-provider :size="assemblySize" :locale="local">
    <RouterView />
  </el-config-provider>
</template>

<script lang="ts" setup>
import {computed, onMounted} from 'vue'
import {RouterView} from 'vue-router'
import {storeToRefs} from "pinia";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useI18n } from "vue-i18n";

import {useGlobalStore} from "@/store/modules";
import {Language} from "@/constants";
import { getBrowserLanguage } from "@/utils";

const globalStore = useGlobalStore()
const {assemblySize} = storeToRefs(globalStore)
const i18n = useI18n()
const local = computed(() => {
  if (globalStore.language === Language.Zh) return zhCn
  else if (globalStore.language === Language.En) return en
  return getBrowserLanguage() === Language.Zh ? zhCn : en
})

onMounted(() => {
  const language = globalStore.language ?? getBrowserLanguage()
  i18n.locale.value = language
  globalStore.setLanguage(language)
})

onMounted(() => {
  const leftStyle =
    'background-color:#2f353a;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0.2rem 0 0 0.2rem;'
  const rightStyle =
    'background-color:#17a2b8;color:#fff;padding:0 5px;line-height:1.2rem;border-radius:0 0.2rem 0.2rem 0;'
  console.log(`%c MODE %c ${import.meta.env.MODE}`, leftStyle, rightStyle)
  console.log(`%c VERSION %c ${__APP_VERSION__}`, leftStyle, rightStyle)
  console.log(`%c BUILD_TIME %c ${__APP_BUILD_TIME__}`, leftStyle, rightStyle)
})
</script>
