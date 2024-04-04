<!--
折叠按钮
-->
<template>
  <el-icon class="header-collapse-icon" @click="handleToggleCollapse">
    <component :is="globalStore.isCollapse ? Expand : Fold" />
  </el-icon>
</template>

<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/modules'

const globalStore = useGlobalStore()

// 切换折叠状态
function handleToggleCollapse() {
  globalStore.toggleCollapse()
}
</script>

<style scoped lang="less">
.header-collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
