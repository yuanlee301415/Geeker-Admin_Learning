<template>
  <el-container class="layout">
    <el-aside width="210px">
      SideBar
    </el-aside>

    <el-container>
      <el-header height="55px">
        Header
      </el-header>

      <Main/>
    </el-container>
    
  </el-container>
</template>

<script setup lang="ts">
import Main from '../compoents/Main/index.vue'

</script>

<style scoped lang="less">

</style>
