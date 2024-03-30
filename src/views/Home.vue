<template>
  <el-card class="h-full flx-center">
    <img src="@/assets/images/welcome.png">
    <h6>{{ $t('home.welcome') }}</h6>
  </el-card>
</template>

<style scoped lang="less">
img {
  display: block;
  height: 70vh;
}
h6 {
  text-align: center;
  font-size: 1.2rem;
  line-height: 3;
  color: var(--el-text-color-primary);
}
</style>
