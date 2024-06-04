<!--
分栏布局
-->
<template>
  <el-container class="layout layoutColumns">
    <div class="aside-split">
      <Logo hidden-txt />
      <el-scrollbar>
        <ul class="split-list">
          <li
            v-for="item of menuList"
            :key="item.path"
            :class="{
              'split-active': splitActive === item.path || `/${route.path.split('/')[1]}` === item.path
            }"
            @click="handleClickMenu(item)"
          >
            <el-icon>
              <component :is="item.meta.icon" />
            </el-icon>
            <span class="title sle">{{ item.meta.title }}</span>
          </li>
        </ul>
      </el-scrollbar>
    </div>

    <el-aside v-show="subMenuList?.length" :style="{ width: isCollapse ? '65px' : '210px' }">
      <Logo hidden-img>
        <template v-if="isCollapse" #default>G</template>
      </Logo>
      <el-scrollbar>
        <el-menu :collapse="isCollapse" :collapse-transition="false" :unique-opened="accordion" :router="false" :default-active="activeMenu">
          <SubMenu :menu-list="subMenuList" />
        </el-menu>
      </el-scrollbar>
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
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Logo from '../compoents/Logo/index.vue'
import SubMenu from '../compoents/Menu/SubMenu.vue'
import Main from '../compoents/Main/index.vue'
import ToolBarLeft from '../compoents/Header/ToolBarLeft.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'
import { useGlobalStore } from '@/store/modules'
import { useAuthStore } from '@/store/modules/auth'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const { isCollapse, accordion } = storeToRefs(globalStore)
const splitActive = ref('')
const subMenuList = ref()
const route = useRoute()
const router = useRouter()
const menuList = computed(() => authStore.showMenuListGet)
const activeMenu = computed(() => route.meta.activeMenu ?? route.path)

watch(
  () => [menuList, route],
  () => {
    if (!menuList.value.length) return

    const menuItem = menuList.value.filter((item) => route.path === item.path || `/${route.path.split('/')[1]}` === item.path)
    subMenuList.value = menuItem[0]?.children
    splitActive.value = route.path
  },
  {
    deep: true,
    immediate: true
  }
)

// 单击菜单项
function handleClickMenu(item: Menu.MenuOptions) {
  splitActive.value = item.path
  subMenuList.value = item?.children ?? []
  router.push(item.path)
}
</script>

<style scoped lang="less">
@import './style';
</style>
