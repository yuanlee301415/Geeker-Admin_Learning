<template>
  <div class="card content-box directives-box">
    <h2>防抖指令 🍇🍇🍇🍓🍓🍓</h2>
    <el-button v-debounce="debounceClick"> 防抖按钮 (1 秒后执行) </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

function debounceClick() {
  ElMessage.success('我是防抖按钮触发的事件')
}
</script>

<style scoped lang="less">
@import '../style';
</style>
