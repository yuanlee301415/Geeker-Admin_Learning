<!--
菜单项（及递归子菜单）
-->
<template>
  <template v-for="item of menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span class="sle">{{ item.meta.title }}</span>
      </template>

      <SubMenu :menu-list="item.children" />
    </el-sub-menu>

    <el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
      <el-icon v-if="item.meta.icon">
        <component :is="item.meta.icon" />
      </el-icon>
      <template #title>
        <span class="sle">{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps<{ menuList: Menu.MenuOptions[] | void }>()

// 单击菜单项，跳转跳转
function handleClickMenu(item: Menu.MenuOptions) {
  if (item.meta.isLink) {
    window.open(item.meta.isLink, '_blank')
    return
  }
  router.push(item.path)
}
</script>

<style lang="less">
@import 'style';
</style>
