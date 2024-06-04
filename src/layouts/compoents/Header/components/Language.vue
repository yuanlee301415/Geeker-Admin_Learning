<!--
语言
-->

<template>
  <el-dropdown trigger="click" @command="handleChooseLanguage">
    <i class="iconfont icon-zhongyingwen"></i>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item of languages" :key="item.value" :command="item.value" :disabled="item.value === globalStore.language">{{
          item.label
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/store/modules'
import { Language } from '@/constants'

const languages = [
  { label: '简体中文', value: Language.Zh },
  { label: 'English', value: Language.En }
]
const globalStore = useGlobalStore()
const i18n = useI18n()

// 选择语言
function handleChooseLanguage(language: Language) {
  globalStore.setLanguage(language)
  i18n.locale.value = language
}
</script>
