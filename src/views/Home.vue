<template>
  <div class="card home">
    <div class="img">
      <img src="@/assets/images/welcome.png" alt="Welcome">
    </div>
    <h6>{{ $t('home.welcome') }}</h6>
  </div>
</template>

<style scoped lang="less">
.home {
  .img {
    height: calc(100% - 60px);
    text-align: center;

    img {
      height: 100%;
    }
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
