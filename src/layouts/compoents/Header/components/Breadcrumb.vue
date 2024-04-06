<!--
面包屑
-->
<template>
  <div :class="{ 'no-icon': !globalStore.breadcrumbIcon }" class="breadcrumb-box">
    <el-breadcrumb :separator-icon="ArrowRight">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="(item, index) of breadcrumbList"
          :key="item.path"
          @click="handleClickBreadcrumbItem(item, index)"
        >
          <div :class="{ 'item-no-icon': !item.meta.icon }" class="el-breadcrumb__inner is-link">
            <el-icon v-if="globalStore.breadcrumbIcon && item.meta.icon" class="breadcrumb-icon">
              <Component :is="item.meta.icon" />
            </el-icon>
            <span class="breadcrumb-title">{{ item.meta.title }}</span>
          </div>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/modules'
import { useAuthStore } from '@/store/modules/auth'

const globalStore = useGlobalStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const breadcrumbList = computed(
  () => authStore.breadcrumbListGet[route.matched[route.matched.length - 1].path] ?? []
)

// 单击面包屑项目
function handleClickBreadcrumbItem(item: Menu.MenuOptions, index: number) {
  if (index === breadcrumbList.value.length - 1) return
  router.push(item.path)
}
</script>

<style scoped lang="less">
.breadcrumb-box {
  .el-breadcrumb {
    white-space: nowrap;
    .el-breadcrumb__item {
      position: relative;
      display: inline-block;
      float: none;
      .item-no-icon {
        transform: translateY(-3px);
      }
      .el-breadcrumb__inner {
        display: inline-flex;
        &.is-link {
          color: var(--el-header-text-color);
          &:hover {
            color: var(--el-color-primary);
          }
        }
        .breadcrumb-icon {
          margin-top: 1px;
          margin-right: 6px;
          font-size: 16px;
        }
        .breadcrumb-title {
          margin-top: 2px;
        }
      }
      &:last-child .el-breadcrumb__inner,
      &:last-child .el-breadcrumb__inner:hover {
        color: var(--el-header-text-color-regular);
      }
      :deep(.el-breadcrumb__separator) {
        transform: translateY(-1px);
      }
    }
  }

  &.no-icon {
    .el-breadcrumb {
      .el-breadcrumb__item {
        top: -2px;
        :deep(.el-breadcrumb__separator) {
          top: 3px;
        }
        .item-no-icon {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
