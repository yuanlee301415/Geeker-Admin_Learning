<template>
  <div class="card content-box directives-box">
    <h2>长按指令 🍇🍇🍇🍓🍓🍓</h2>
    <el-button v-longpress="longpress">长按2秒触发事件</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

function longpress() {
  ElMessage.success('长按事件触发成功')
}
</script>

<style scoped lang="less">
@import '../style';
</style>
