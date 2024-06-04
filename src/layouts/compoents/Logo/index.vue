<!--
Logo
-->

<template>
  <div class="logo flx-center">
    <img v-if="!hiddenImg" src="~@/assets/logo.svg" alt="Geeker Admin Logo" />
    <h1 v-if="!hiddenTxt" v-show="!collapse" @click="router.push(HOME_URL)">
      <slot>{{ title }}</slot>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { HOME_URL } from '@/constants'

const title = import.meta.env.VITE_APP_TITLE
const router = useRouter()

defineProps<{
  // 是否是折叠状态
  collapse?: boolean

  // 是否隐藏图片
  hiddenImg?: boolean

  // 是否隐藏文字
  hiddenTxt?: boolean
}>()
</script>

<style scoped lang="less">
.logo {
  height: 55px;
  img {
    width: 28px;
  }
  h1 {
    cursor: pointer;
    margin-left: 6px;
    font-size: 21.5px;
    font-weight: bold;
    color: var(--el-aside-logo-text-color);
    white-space: nowrap;
  }
}
</style>
