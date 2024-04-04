<!--
页面主体容器
-->
<template>
  <div class="layout-main">
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useGlobalStore } from '@/store/modules'

const globalStore = useGlobalStore()

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
