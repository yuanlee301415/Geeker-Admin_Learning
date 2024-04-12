<template>
  <div class="header-toolbar_right">
    <div class="header-icon">
      <AssemblySize />
      <Language />
      <SearchMenu />
      <ThemeSetting />
      <Message />
      <FullScreen />
    </div>

    <span class="username">Geeker</span>

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
    margin: 0 10px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
