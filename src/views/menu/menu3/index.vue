<template>
  <div class="card content-box">
    <span class="text">我是menu3 🍓🍇🍈🍉</span>
    <h3>我不缓存！！！</h3>
    <el-input v-model="value" placeholder="测试缓存"></el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string>('')
</script>
