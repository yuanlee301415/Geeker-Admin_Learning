<!--
标签栏更多功能
-->
<template>
  <el-dropdown :teleported="false" trigger="click">
    <div class="more-button flx-center">
      <i class="iconfont icon-xiala" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleRefresh">
          <el-icon><Refresh /></el-icon>刷新
        </el-dropdown-item>

        <el-dropdown-item @click="handleToggleMaximize">
          <el-icon><FullScreen /></el-icon>全屏
        </el-dropdown-item>

        <el-dropdown-item :disabled="route.meta.isAffix" divided @click="handleCloseCurrentTab">
          <el-icon><Remove /></el-icon>关闭当前
        </el-dropdown-item>

        <el-dropdown-item
          :disabled="!tabsStore.canCloseLeftSide(route.fullPath)"
          @click="tabsStore.closeLeftSide(route.fullPath)"
        >
          <el-icon><DArrowLeft /></el-icon>关闭左侧
        </el-dropdown-item>

        <el-dropdown-item
          :disabled="!tabsStore.canCloseRightSide(route.fullPath)"
          @click="tabsStore.closeRightSide(route.fullPath)"
        >
          <el-icon><DArrowRight /></el-icon>关闭右侧
        </el-dropdown-item>

        <el-dropdown-item
          :disabled="!tabsStore.canCloseOthers(route.fullPath)"
          divided
          @click="tabsStore.closeTabs(route.fullPath)"
        >
          <el-icon><CircleClose /></el-icon>关闭其它
        </el-dropdown-item>

        <el-dropdown-item :disabled="!tabsStore.canCloseOthers()" @click="handleCloseAll">
          <el-icon><FolderDelete /></el-icon>关闭所有
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {
  Refresh,
  FullScreen,
  Remove,
  DArrowLeft,
  DArrowRight,
  CircleClose,
  FolderDelete
} from '@element-plus/icons-vue'
import { inject, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useKeepAliveStore } from '@/store/modules/keepAlive'
import { refreshCurrentPageKey } from '@/tokens'
import { useGlobalStore } from '@/store/modules'
import { useTabsStore } from '@/store/modules/tabs'
import { HOME_URL } from '@/config'

const refreshCurrentPage = inject(refreshCurrentPageKey)!
const route = useRoute()
const router = useRouter()
const keepAliveStore = useKeepAliveStore()
const globalStore = useGlobalStore()
const tabsStore = useTabsStore()

// 刷新当前页面
function handleRefresh() {
  setTimeout(() => {
    route.meta.isKeepAlive && keepAliveStore.removeName(route.fullPath)
    refreshCurrentPage(false)
    nextTick(() => {
      route.meta.isKeepAlive && keepAliveStore.addName(route.fullPath)
      refreshCurrentPage(true)
    })
  })
}

// 全屏
function handleToggleMaximize() {
  globalStore.toggleMaximize()
}

// 关闭当前标签页
function handleCloseCurrentTab() {
  if (route.meta.isAffix) return
  tabsStore.removeTab(route.fullPath, true)
}

// 关闭所有标签
function handleCloseAll() {
  tabsStore.closeTabs()
  router.push(HOME_URL)
}
</script>

<style scoped lang="less">
.el-dropdown {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  .more-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43px;
    cursor: pointer;
    border-left: 1px solid var(--el-border-color-light);
    transition: all 0.3s;
    &:hover {
      background-color: var(--el-color-info-light-9);
    }
    .iconfont {
      font-size: 12.5px;
    }
  }
}
</style>
