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
@import 'style';
</style>
