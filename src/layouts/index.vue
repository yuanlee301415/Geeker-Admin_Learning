<template>
  <component :is="LayoutVertical"/>
  <ThemeDrawer/>
</template>

<script setup lang="ts">
import LayoutVertical from './LayoutVertical/index.vue'
import ThemeDrawer from './compoents/ThemeDrawer/index.vue'

</script>

<style scoped lang="less">

</style>
