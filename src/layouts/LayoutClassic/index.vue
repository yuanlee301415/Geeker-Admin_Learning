<!--
经典布局
-->
<template>
  <el-container class="layout layoutClassic">
    <el-header height="55px">
      <Logo :collapse="isCollapse" />
      <ToolBarLeft />
      <ToolBarRight />
    </el-header>

    <el-container>
      <el-aside>
        <div :style="{ width: isCollapse ? '65px' : '210px' }" class="sideBar h-full">
          <el-scrollbar>
            <el-menu
              :collapse="isCollapse"
              :collapse-transition="false"
              :unique-opened="accordion"
              :router="false"
              :default-active="activeMenu"
            >
              <SubMenu :menu-list="authStore.showMenuListGet" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>

      <el-container direction="vertical">
        <Main />

        <el-footer v-if="footer" height="30px">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useGlobalStore } from '@/store/modules'
import Logo from '../compoents/Logo/index.vue'
import SubMenu from '../compoents/Menu/SubMenu.vue'
import Main from '../compoents/Main/index.vue'
import Footer from '../compoents/Footer/index.vue'
import ToolBarLeft from '../compoents/Header/ToolBarLeft.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'
import { useAuthStore } from '@/store/modules/auth'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const route = useRoute()
const { isCollapse, accordion, footer } = storeToRefs(globalStore)
const activeMenu = computed(() => route.meta.activeMenu ?? route.path)
</script>

<style scoped lang="less">
@import './style';
</style>
