<!--
500 错误页面
-->
<template>
  <div class="error-page">
    <img src="@/assets/images/500.png" alt="500" />
    <div class="error-box">
      <h2>500</h2>
      <p>抱歉，您的网络不见了~🤦‍♂️🤦‍♀️</p>
      <el-button type="primary" @click="router.back()">返回上一页</el-button>
      <el-button type="primary" @click="router.push('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="less">
@import 'style';
</style>
