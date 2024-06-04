<!--
页头右侧
-->

<template>
  <div class="header-toolbar_right">
    <div class="header-icon">
      <AssemblySize id="assemblySize" />
      <Language id="language" />
      <SearchMenu id="searchMenu" />
      <ThemeSetting id="themeSetting" />
      <Message id="message" />
      <FullScreen id="fullScreen" />
    </div>

    <span class="username">{{ userStore.info.username }}</span>

    <Avatar />
  </div>
</template>

<script setup lang="ts">
import AssemblySize from './components/AssemblySize.vue'
import Language from './components/Language.vue'
import SearchMenu from './components/SearchMenu.vue'
import ThemeSetting from './components/ThemeSetting.vue'
import Message from './components/Message.vue'
import FullScreen from './components/FullScreen.vue'
import Avatar from './components/Avatar.vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
</script>

<style scoped lang="less">
.header-toolbar_right {
  display: flex;
  align-items: center;
  padding-right: 25px;
  .username {
    padding-right: 1rem;
  }
  .header-icon {
    display: flex;
    align-items: center;
    > * {
      margin-right: 1rem;
      color: var(--el-header-text-color);
    }
  }
  .username {
    text-transform: capitalize;
    margin: 0 10px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
