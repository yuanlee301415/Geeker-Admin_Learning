<template>
  <el-icon class="header-toolbar_collapse" @click="handleCollapse">
    <component :is="isCollapse ? Expand: Fold"/>
  </el-icon>
</template>

<script setup lang="ts">
import { Fold, Expand} from "@element-plus/icons-vue";
import { useGlobalStore } from "@/store/modules";
import {computed} from "vue";

const globalStore = useGlobalStore()
const isCollapse = computed(() => globalStore.isCollapse)

function handleCollapse() {
  globalStore.toggleCollapse()
}
</script>

<style scoped lang="less">
.header-toolbar_collapse {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
