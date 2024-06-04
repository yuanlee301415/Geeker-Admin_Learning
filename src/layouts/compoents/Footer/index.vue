<!--
页脚
-->
<template>
  <el-footer v-if="globalStore.footer" height="30px" class="flx-center">
    <a href="https://github.com/HalseySpicy" target="_blank"> 2024 © Geeker-Admin By Geeker Technology. </a>
  </el-footer>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/modules'
const globalStore = useGlobalStore()
</script>
