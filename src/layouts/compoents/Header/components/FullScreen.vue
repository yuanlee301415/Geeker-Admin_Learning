<!--
浏览器全屏
-->

<template>
  <i :class="[isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="iconfont" @click="handleFullscreen"></i>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

const isFullscreen = ref(screenfull.isFullscreen)

onMounted(() => {
  screenfull.on('change', () => {
    isFullscreen.value = screenfull.isFullscreen
  })
})

// 全屏
function handleFullscreen() {
  if (!screenfull.isEnabled) {
    ElMessage.warning('当前您的浏览器不支持全屏')
    return
  }
  screenfull.toggle()
}
</script>
