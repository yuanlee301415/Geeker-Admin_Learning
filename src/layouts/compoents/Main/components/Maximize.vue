<template>
  <div v-show="globalStore.maximize" class="maximize" @click="globalStore.toggleMaximize()">
    <i class="iconfont icon-tuichu"></i>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules'
const globalStore = useGlobalStore()
</script>

<style scoped lang="less">
.maximize {
  position: fixed;
  top: -25px;
  right: -25px;
  width: 55px;
  height: 55px;
  cursor: pointer;
  background-color: var(--el-color-info);
  border-radius: 50%;
  opacity: 0.9;
  &:hover {
    background-color: var(--el-color-info-dark-2);
    opacity: 0.95;
  }
  .iconfont {
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 46%;
    left: 19%;
  }
}
</style>
