<!--
横向布局
-->
<template>
  <el-container class="layout layoutTransverse">
    <el-header height="55px">
      <Logo />
      <el-menu mode="horizontal" ellipsis>
        <template v-for="item of menuList" :key="item.path">
          <el-sub-menu v-if="item.children?.length" :index="item.path">
            <template #title>
              <el-icon v-if="item.meta.icon">
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>

            <SubMenu :menu-list="item.children" />
          </el-sub-menu>

          <el-menu-item v-else :index="item.path">
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
import Logo from '../compoents/Logo/index.vue'
import SubMenu from '../compoents/Menu/SubMenu.vue'
import Main from '../compoents/Main/index.vue'
import Tabs from '../compoents/Tabs/index.vue'
import Footer from '../compoents/Footer/index.vue'
import ToolBarRight from '../compoents/Header/ToolBarRight.vue'
import { useGlobalStore } from '@/store/modules'

const globalStore = useGlobalStore()
const menuList = [
  {
    path: '/home/index',
    name: 'home',
    component: '/home/index',
    meta: {
      icon: 'HomeFilled',
      title: '首页',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: true,
      isKeepAlive: true
    }
  },
  {
    path: '/dataScreen',
    name: 'dataScreen',
    component: '/dataScreen/index',
    meta: {
      icon: 'Histogram',
      title: '数据大屏',
      isLink: '',
      isHide: false,
      isFull: true,
      isAffix: false,
      isKeepAlive: true
    }
  },
  {
    path: '/proTable',
    name: 'proTable',
    redirect: '/proTable/useProTable',
    meta: {
      icon: 'MessageBox',
      title: '超级表格',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: '/proTable/useProTable',
        name: 'useProTable',
        component: '/proTable/useProTable/index',
        meta: {
          icon: 'Menu',
          title: '使用 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
        children: []
      },
      {
        path: '/proTable/useTreeFilter',
        name: 'useTreeFilter',
        component: '/proTable/useTreeFilter/index',
        meta: {
          icon: 'Menu',
          title: '使用 TreeFilter',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/useSelectFilter',
        name: 'useSelectFilter',
        component: '/proTable/useSelectFilter/index',
        meta: {
          icon: 'Menu',
          title: '使用 SelectFilter',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/treeProTable',
        name: 'treeProTable',
        component: '/proTable/treeProTable/index',
        meta: {
          icon: 'Menu',
          title: '树形 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/complexProTable',
        name: 'complexProTable',
        component: '/proTable/complexProTable/index',
        meta: {
          icon: 'Menu',
          title: '复杂 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/document',
        name: 'proTableDocument',
        component: '/proTable/document/index',
        meta: {
          icon: 'Menu',
          title: 'ProTable 文档',
          isLink: 'https://juejin.cn/post/7166068828202336263/#heading-14',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  }
]
</script>

<style scoped lang="less">
@import './style';
</style>
