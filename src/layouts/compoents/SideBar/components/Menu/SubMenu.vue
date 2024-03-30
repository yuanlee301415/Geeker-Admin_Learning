<template>
  <template v-for="item of menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">

      <template #title>
        <el-icon v-if="item.meta.icon">
          <component :is="item.meta.icon"/>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>

      <SubMenu :menu-list="item.children"/>

    </el-sub-menu>

    <el-menu-item v-else :index="item.path">
      <el-icon v-if="item.meta.icon">
        <component :is="item.meta.icon"/>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps<{ menuList: Menu.MenuOptions[]}>()
</script>

<style scoped lang="less">
.el-menu-item {
  &:hover {
    color: var(--el-menu-hover-text-color);
  }
  &.is-active {
    &::before {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      content: "";
      background-color: var(--el-color-primary);
    }
  }
}
</style>
