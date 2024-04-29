<template>
  <div class="card content-box directives-box" v-water-mark="{ text, textColor: '#5a6d8f' }">
    <h2>水印指令 🍇🍓</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('水印内容')
</script>

<style scoped lang="less">
@import '../style';
</style>
