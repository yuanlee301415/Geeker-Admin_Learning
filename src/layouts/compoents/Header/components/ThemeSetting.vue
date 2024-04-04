<!--
主题设置
-->
<template>
  <i class="iconfont icon-zhuti" @click="handleOpenThemeDrawer"/>
</template>

<script setup lang="ts">
import mittBus from "@/utils/mittBus";

function handleOpenThemeDrawer() {
  mittBus.emit('openThemeDrawer')
}
</script>
