<!--
页面主体容器
-->
<template>
  <el-main>
    <Tabs v-show="globalStore.tabs" />

    <div class="layout-main">
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive>
            <component v-if="viewVisible" :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </el-main>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import Tabs from '../Tabs/index.vue'
import { useGlobalStore } from '@/store/modules'
import { refreshCurrentPageKey } from '@/tokens'

const globalStore = useGlobalStore()

// 提供刷新页面的方法
const viewVisible = ref(true)
provide(refreshCurrentPageKey, function (visible: boolean) {
  viewVisible.value = visible
})

// 监听布局变化，在 body 上添加相对应的 layout class
watch(
  () => globalStore.layout,
  () => {
    document.body.setAttribute('class', globalStore.layout)
  },
  {
    immediate: true
  }
)
</script>
