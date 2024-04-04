<!--
Logo
-->
<template>
  <div class="logo flx-center">
    <img v-if="!hiddenImg" src="~@/assets/logo.svg" alt="Geeker Admin Logo"/>
    <h1 v-if="!hiddenTxt" v-show="!collapse">
      <slot>Geeker Admin</slot>
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // 是否是折叠状态
  collapse?: boolean

  // 是否隐藏图片
  hiddenImg?: boolean

  // 是否隐藏文字
  hiddenTxt?: boolean
}>()
</script>

<style scoped lang="less">
.logo {
  height: 55px;
  img {
    width: 28px;
  }
  h1 {
    margin-left: 6px;
    font-size: 21.5px;
    font-weight: bold;
    color: var(--el-aside-logo-text-color);
    white-space: nowrap;
  }
}
</style>
