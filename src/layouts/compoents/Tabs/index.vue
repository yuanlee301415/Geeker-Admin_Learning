<!--
标签栏
-->
<template>
  <div class="tabs-box">
    <div class="tabs-wrap">
      <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick" @tab-remove="handleTabRemove">
        <el-tab-pane v-for="item of tabsStore.tabs" :key="item.path" :name="item.path" :label="item.title" :closable="item.closeable">
          <template #label>
            <el-icon v-if="globalStore.tabsIcon && item.icon" class="tabs-icon">
              <component :is="item.icon" />
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>

      <MoreButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabPaneName, TabsPaneContext } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sortable from 'sortablejs'
import { useGlobalStore } from '@/store/modules'
import { useTabsStore } from '@/store/modules/tabs'
import { useAuthStore } from '@/store/modules/auth'
import MoreButton from './components/MoreButton/index.vue'

const globalStore = useGlobalStore()
const tabsStore = useTabsStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const activeName = ref(route.fullPath)

// 监听路由变化，添加标签
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return

    const { icon, title, isAffix, isKeepAlive } = route.meta
    tabsStore.addTab({
      path: route.fullPath as string,
      name: route.name as string,
      icon: icon as string,
      title: title as string,
      closeable: !isAffix as boolean,
      isKeepAlive: isKeepAlive as boolean
    })
    activeName.value = route.fullPath
  },
  {
    immediate: true
  }
)

onMounted(() => {
  initFixedTabs()
  tabsDrop()
})

// 初始化默认固定的标签
function initFixedTabs() {
  authStore.flatMenuListGet.forEach((item) => {
    const { isAffix, isHide, isFull, isLink, icon, title, isKeepAlive } = item.meta
    if (isHide || isFull || isLink || !isAffix) return

    tabsStore.addTab({
      path: item.path,
      name: item.name as string,
      icon: icon as string,
      title: title as string,
      closeable: !isAffix as boolean,
      isKeepAlive: isKeepAlive as boolean
    })
  })
}

// 标签栏拖拽排序
function tabsDrop() {
  Sortable.create(document.querySelector('.el-tabs__nav') as HTMLElement, {
    draggable: '.el-tabs__item',
    animation: 300,
    onEnd({ newIndex, oldIndex }) {
      const tabs = [...tabsStore.tabs]
      const curr = tabs.splice(oldIndex as number, 1)[0]
      tabs.splice(newIndex as number, 0, curr)
      tabsStore.setTabs(tabs)
    }
  })
}

// 单击标签
function handleTabClick(tabItem: TabsPaneContext) {
  router.push(tabItem.props.name as string)
}

// 关闭标签
function handleTabRemove(path: TabPaneName) {
  tabsStore.removeTab(path as string, path === route.fullPath)
}
</script>

<style scoped lang="less">
@import './style';
</style>
