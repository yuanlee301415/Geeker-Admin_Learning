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

    <el-footer v-if="globalStore.footer" height="30px">
      <Footer />
    </el-footer>

    <Maximize />
  </el-main>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import Tabs from '../Tabs/index.vue'
import Maximize from './components/Maximize.vue'
import { useGlobalStore } from '@/store/modules'
import { refreshCurrentPageKey } from '@/tokens'
import Footer from '@/layouts/compoents/Footer/index.vue'

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

// 监听窗口最大化
const $app = document.getElementById('app')!
watch(
  () => globalStore.maximize,
  () => {
    if (globalStore.maximize) {
      $app.classList.add('main-maximize')
    } else {
      $app.classList.remove('main-maximize')
    }
  },
  {
    immediate: true
  }
)
</script>
