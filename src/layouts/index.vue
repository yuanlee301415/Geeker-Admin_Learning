<!--
Layout
-->

<template>
  <component :is="layouts[globalStore.layout]" />
  <ThemeDrawer />
</template>

<script setup lang="ts">
import type { Component } from 'vue'

import { Layout } from '@/constants'
import { useGlobalStore } from '@/store/modules'
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutTransverse from './LayoutTransverse/index.vue'
import LayoutColumns from './LayoutColumns/index.vue'
import ThemeDrawer from './compoents/ThemeDrawer/index.vue'

const globalStore = useGlobalStore()
const layouts: Record<Layout, Component> = {
  [Layout.Vertical]: LayoutVertical,
  [Layout.Classic]: LayoutClassic,
  [Layout.Transverse]: LayoutTransverse,
  [Layout.Columns]: LayoutColumns
}
</script>

<style lang="less">
.layout {
  min-width: 800px;
  .el-header {
    background-color: var(--el-header-bg-color);
    border-bottom: 1px solid var(--el-header-border-color);
  }
  .el-aside {
    width: auto;
    border-right: 1px solid var(--el-aside-border-color);
    background-color: var(--el-menu-bg-color);
  }
  .el-main {
    box-sizing: border-box;
    padding: 0;
    background-color: var(--el-bg-color-page);
    overflow: hidden;
    display: flex;
    .layout-main {
      flex: 1;
      padding: 10px;
      overflow: auto;
    }
  }
  .el-menu {
    border-right: none;
  }
  .sideBar {
    transition: width 0.3s ease;
    .el-menu {
      width: 100%;
      border-right: none;
    }
  }
  .el-footer {
    padding: 0;
    line-height: 2;
    background-color: var(--el-bg-color);
    border-top: 1px solid var(--el-border-color-light);
    a {
      color: var(--el-text-color-secondary);
    }
  }
}
</style>
