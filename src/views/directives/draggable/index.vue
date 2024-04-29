<template>
  <div class="card content-box directives-box">
    <h2>拖拽 🍇🍓</h2>
    <div v-draggable class="drag-box flx-center">
      我可以拖拽哦~
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
@import '../style';
.content-box {
  position: relative;
  display: flex;
  justify-content: center;
  .drag-box {
    position: absolute;
    top: 110px;
    width: 300px;
    height: 300px;
    font-size: 23px;
    font-weight: bold;
    color: var(--el-color-primary);
    background-color: var(--el-color-primary-light-9);
    border-radius: 50%;
  }
}

</style>
