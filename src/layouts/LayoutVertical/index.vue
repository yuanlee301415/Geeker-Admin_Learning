<template>
  <el-container class="layout w-screen h-screen">
    <el-aside width="210px">
      <SideBar/>
    </el-aside>

    <el-container>
      <el-header height="55px">
        <ToolBarLeft/>
        <ToolBarRight/>
      </el-header>

      <Main/>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import SideBar from '../compoents/SideBar/index.vue'
import Main from '../compoents/Main/index.vue'
import ToolBarLeft from '../compoents/Header/ToolBarLeft.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'

</script>

<style scoped lang="less">
@import "./style";
</style>
