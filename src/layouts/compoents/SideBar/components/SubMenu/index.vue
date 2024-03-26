<template>
  <div data-__COMP__="SubMenu">
    SubMenu
  </div>
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
