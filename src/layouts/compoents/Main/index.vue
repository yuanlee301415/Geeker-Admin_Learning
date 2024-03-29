<template>
  <Tabs/>

  <el-main>
    <router-view v-slot="{Component, route}">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.fullPath"/>
        </keep-alive>
      </transition>
    </router-view>
  </el-main>

  <Footer/>

</template>

<script setup lang="ts">
import Tabs from '../Tabs/index.vue'
import Footer from '../Footer/index.vue'

</script>

<style scoped lang="less">
.el-main {
  background-color: var(--el-bg-color-page);
  box-sizing: border-box;
  padding: 12px;
  overflow: hidden;
}
</style>
