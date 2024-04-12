<!--
页面主体容器
-->
<template>
  <el-main>
    <Tabs v-show="globalStore.tabs" />

    <div class="layout-main">
      <router-view v-slot="{ Component, route }">
        <transition appear name="fade-transform" mode="out-in">
          <keep-alive :include="keepAliveNames">
            <component
              v-if="viewVisible"
              :is="createComponentWrapper(Component, route)"
              :key="route.fullPath"
            />
          </keep-alive>
        </transition>
      </router-view>
    </div>

    <Footer />

    <Maximize />
  </el-main>
</template>

<script setup lang="ts">
import type { VNode } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { h, provide, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import Tabs from '../Tabs/index.vue'
import Maximize from './components/Maximize.vue'
import Footer from '@/layouts/compoents/Footer/index.vue'
import { useGlobalStore } from '@/store/modules'
import { refreshCurrentPageKey } from '@/tokens'
import { useKeepAliveStore } from '@/store/modules/keepAlive'

const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()
const { keepAliveNames } = storeToRefs(keepAliveStore)
const viewVisible = ref(true)

// 提供刷新页面的方法
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

// 监听页面最大化
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

// 缓存页面
const wrapperMap = new Map()
function createComponentWrapper(component: VNode, route: RouteLocationNormalizedLoaded) {
  if (!component) return
  const name = route.fullPath
  let wrapper = wrapperMap.get(name)
  if (!wrapper) {
    wrapper = { name, render: () => h(component) }
    wrapperMap.set(name, wrapper)
  }
  return h(wrapper)
}
</script>
