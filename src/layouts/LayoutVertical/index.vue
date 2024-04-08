<!--
纵向布局
-->
<template>
  <el-container class="layout layoutVertical">
    <el-aside>
      <div :style="{ width: isCollapse ? '65px' : '210px' }" class="sideBar h-full">
        <Logo :collapse="isCollapse" />
        <el-scrollbar>
          <el-menu
            :router="false"
            :collapse="isCollapse"
            :collapse-transition="false"
            :unique-opened="accordion"
            :default-active="activeMenu"
          >
            <SubMenu :menu-list="authStore.showMenuListGet" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>

    <el-container>
      <el-header height="55px">
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>

      <Main />
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Logo from '../compoents/Logo/index.vue'
import SubMenu from '../compoents/Menu/SubMenu.vue'
import Main from '../compoents/Main/index.vue'
import ToolBarLeft from '../compoents/Header/ToolBarLeft.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'
import { useGlobalStore } from '@/store/modules'
import { useAuthStore } from '@/store/modules/auth'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const route = useRoute()
const { isCollapse, accordion } = storeToRefs(globalStore)
const activeMenu = computed(() => route.meta.activeMenu ?? route.path)
</script>

<style scoped lang="less">
@import './style';
</style>
