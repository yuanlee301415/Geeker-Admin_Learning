<!--
首页
-->

<template>
  <div class="card home">
    <div class="home-bg"></div>
    <h6>{{ $t('home.welcome') }}</h6>
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  .home-bg {
    flex: 1;
    background: url('@/assets/images/welcome.png') center center no-repeat;
    background-size: contain;
  }
  h6 {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 1.2rem;
    color: var(--el-text-color-primary);
  }
}
</style>
