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

        <el-dropdown-item divided>
          <el-icon><Remove /></el-icon>关闭当前
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><DArrowLeft /></el-icon>关闭左侧
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><DArrowRight /></el-icon>关闭右侧
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon><CircleClose /></el-icon>关闭其它
        </el-dropdown-item>

        <el-dropdown-item>
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
import { useRoute } from 'vue-router'
import { useKeepAliveStore } from '@/store/modules/keepAlive'
import { refreshCurrentPageKey } from '@/tokens'
import { useGlobalStore } from '@/store/modules'

const refreshCurrentPage = inject(refreshCurrentPageKey)!
const route = useRoute()
const keepAliveStore = useKeepAliveStore()
const globalStore = useGlobalStore()

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
