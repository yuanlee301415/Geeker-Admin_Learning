<template>
  <el-container class="layout w-screen h-screen">
    <el-aside>
      <SideBar :collapse="isCollapse"/>
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
import {useGlobalStore} from "@/store/modules";
import {storeToRefs} from "pinia";

const globalStore = useGlobalStore()
const { isCollapse } = storeToRefs(globalStore)
</script>

<style scoped lang="less">
@import "./style";
</style>
