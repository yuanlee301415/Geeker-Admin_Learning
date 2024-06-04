<!--
图标选择器
-->

<template>
  <div class="card content-box assembly-box">
    <h2>图标选择器 🍓🍇🍈🍉</h2>

    <SelectIcon v-model:icon-value="iconValue" />

    <el-icon v-if="iconValue" size="60">
      <component :is="iconValue" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectIcon from '@/components/SelectIcon/index.vue'

const iconValue = ref('')
</script>

<style scoped lang="less">
@import '../style';
</style>
