<!--
节流指令
-->

<template>
  <div class="card content-box directives-box">
    <h2>节流指令 🍇🍇🍇🍓🍓🍓</h2>
    <el-button v-throttle="throttleClick"> 节流按钮 (每隔1S秒后执行) </el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

function throttleClick() {
  ElMessage.success('我是节流按钮触发的事件')
}
</script>

<style scoped lang="less">
@import '../style';
</style>
