<!--
暗黑模式切换-组件
-->

<template>
  <el-switch v-model="globalStore.isDark" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt @change="switchDark" />
</template>

<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/modules'
import { useTheme } from '@/hooks/useTheme'

const globalStore = useGlobalStore()
const { switchDark } = useTheme()
</script>
