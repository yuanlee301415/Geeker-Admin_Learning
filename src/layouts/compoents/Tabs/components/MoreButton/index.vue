<template>
  <el-dropdown :teleported="false" trigger="click">
    <div class="more-button flx-center">
      <i class="iconfont icon-xiala"/>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon><Refresh/></el-icon>刷新
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><FullScreen/></el-icon>全屏
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon><Remove/></el-icon>关闭当前
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><DArrowLeft/></el-icon>关闭左侧
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><DArrowRight/></el-icon>关闭右侧
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon><CircleClose/></el-icon>关闭其它
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><FolderDelete/></el-icon>关闭所有
        </el-dropdown-item>

      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import {Refresh, FullScreen, Remove, DArrowLeft, DArrowRight, CircleClose, FolderDelete} from "@element-plus/icons-vue";
</script>

<style scoped lang="less">
.el-dropdown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  .more-button {
    border-left: 1px solid var(--el-border-color-light);
  }
}
</style>

