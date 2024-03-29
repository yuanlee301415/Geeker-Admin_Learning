<template>
  <el-icon class="header-toolbar_collapse">
    <component :is="Fold"/>
  </el-icon>
</template>

<script setup lang="ts">

import { Fold} from "@element-plus/icons-vue";
</script>

<style scoped lang="less">
.header-toolbar_collapse {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
