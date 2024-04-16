<template>
  <div class="header-toolbar_left">
    <Collapse id="collapse" />
    <Breadcrumb v-if="globalStore.breadcrumb" id="breadcrumb" />
  </div>
</template>

<script setup lang="ts">
import Collapse from './components/Collapse.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useGlobalStore } from '@/store/modules'

const globalStore = useGlobalStore()
</script>

<style scoped lang="less">
.header-toolbar_left {
  display: flex;
  align-items: center;
}
</style>
