<template>
  <div class="header-toolbar_left">
    <Collapse/>
    <Breadcrumb/>
  </div>
</template>

<script setup lang="ts">
import Collapse from './components/Collapse.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<style scoped lang="less">
.header-toolbar_left {
  display: flex;
  align-items: center;
}
</style>
