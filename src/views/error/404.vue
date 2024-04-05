<!--
404 错误页面
-->
<template>
  <div class="error-page">
    <img src="@/assets/images/404.png" alt="404" />
    <div class="error-box">
      <h2>404</h2>
      <p>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</p>
      <el-button type="primary" @click="router.back()">返回上一页</el-button>
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
