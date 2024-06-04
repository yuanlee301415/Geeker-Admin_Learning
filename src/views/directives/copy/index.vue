<!--
复制指令
-->

<template>
  <div class="card content-box directives-box">
    <h2>复制指令 🍇🍇🍇🍓🍓🍓</h2>
    <el-input v-model="text" placeholder="请输入内容">
      <template #append>
        <el-button v-copy="text">复制</el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('我是被复制的内容 🍒 🍉 🍊')
</script>

<style scoped lang="less">
@import '../style';
</style>
