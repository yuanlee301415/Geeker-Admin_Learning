<!--
标签页
-->

<template>
  <div class="card content-box assembly-box">
    <h2>标签页操作 🍓🍇🍈🍉</h2>
    <el-input v-model="tabTitle" placeholder="请输入标题">
      <template #append>
        <el-button @click="handleSetTitle">设置 Tab 标题</el-button>
      </template>
    </el-input>
    <div class="buttons">
      <el-button type="primary" @click="handleRefresh">
        <el-icon><Refresh /></el-icon>刷新
      </el-button>

      <el-button type="primary" @click="handleToggleMaximize">
        <el-icon><FullScreen /></el-icon>全屏
      </el-button>

      <el-button :disabled="route.meta.isAffix" type="primary" @click="handleCloseCurrentTab">
        <el-icon><Remove /></el-icon>关闭当前
      </el-button>

      <el-button :disabled="!tabsStore.canCloseLeftSide(route.fullPath)" type="primary" @click="tabsStore.closeLeftSide(route.fullPath)">
        <el-icon><DArrowLeft /></el-icon>关闭左侧
      </el-button>

      <el-button :disabled="!tabsStore.canCloseRightSide(route.fullPath)" type="primary" @click="tabsStore.closeRightSide(route.fullPath)">
        <el-icon><DArrowRight /></el-icon>关闭右侧
      </el-button>

      <el-button :disabled="!tabsStore.canCloseOthers(route.fullPath)" type="primary" @click="tabsStore.closeTabs(route.fullPath)">
        <el-icon><CircleClose /></el-icon>关闭其它
      </el-button>

      <el-button :disabled="!tabsStore.canCloseOthers()" @click="handleCloseAll">
        <el-icon><FolderDelete /></el-icon>关闭所有
      </el-button>
    </div>
    <div class="buttons">
      <el-button type="info" @click="handleOpen('1')"
        ><el-icon><Position /></el-icon>打开详情页 1</el-button
      >
      <el-button type="info" @click="handleOpen('2')"
        ><el-icon><Position /></el-icon>打开详情页 2</el-button
      >
      <el-button type="info" @click="handleOpen('3')"
        ><el-icon><Position /></el-icon>打开详情页 3</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, nextTick, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTabsStore, useKeepAliveStore, useGlobalStore } from '@/store/modules'
import { refreshCurrentPageKey } from '@/tokens'
import { CircleClose, DArrowLeft, DArrowRight, FolderDelete, FullScreen, Refresh, Remove, Position } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const refreshCurrentPage = inject(refreshCurrentPageKey)!
const keepAliveStore = useKeepAliveStore()
const globalStore = useGlobalStore()
const tabsStore = useTabsStore()
const tabTitle = ref<string>('')

// 设置 Tab 标题
function handleSetTitle() {
  tabsStore.setTabTitle(tabTitle.value)
}

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
  router.push('/')
}

/**
 * 打开详情页
 * @param id
 */
function handleOpen(id: string) {
  router.push(`/assembly/tabs/detail/${id}`)
}
</script>

<style scoped lang="less">
@import '../style';
.buttons {
  margin-top: 30px;
  .el-button {
    .el-icon {
      margin-right: 5px;
    }
  }
}
</style>
