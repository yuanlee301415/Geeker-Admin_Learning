<!--
横向布局
-->
<template>
  <el-container class="layout layoutTransverse">
    <el-header height="55px">
      <Logo />
      <el-menu :router="false" :default-active="activeMenu" mode="horizontal" ellipsis>
        <template v-for="item of authStore.showMenuListGet" :key="item.path">
          <el-sub-menu v-if="item.children?.length" :index="item.path">
            <template #title>
              <el-icon v-if="item.meta.icon">
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>

            <SubMenu :menu-list="item.children" />
          </el-sub-menu>

          <el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
            <el-icon v-if="item.meta.icon">
              <component :is="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
      <ToolBarRight />
    </el-header>

    <el-main>
      <Tabs v-if="globalStore.tabs" />
      <Main />
    </el-main>

    <el-footer v-if="globalStore.footer" height="30px">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Logo from '../compoents/Logo/index.vue'
import SubMenu from '../compoents/Menu/SubMenu.vue'
import Main from '../compoents/Main/index.vue'
import Tabs from '../compoents/Tabs/index.vue'
import Footer from '../compoents/Footer/index.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'
import { useGlobalStore } from '@/store/modules'
import { useAuthStore } from '@/store/modules/auth'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const activeMenu = computed(() => route.meta.activeMenu ?? route.path)

// 单击菜单项，跳转跳转
function handleClickMenu(item: Menu.MenuOptions) {
  if (item.meta.isLink) {
    window.open(item.meta.isLink, '_blank')
    return
  }
  router.push(item.path)
}
</script>

<style scoped lang="less">
@import './style';
</style>
