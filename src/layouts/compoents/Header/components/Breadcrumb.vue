<!--
面包屑
-->
<template>
  <div :class="{ 'no-icon': !globalStore.breadcrumbIcon }" class="breadcrumb-box">
    <el-breadcrumb :separator-icon="ArrowRight">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item of breadcrumbList" :key="item.path">
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
import { ArrowRight } from '@element-plus/icons-vue'
import { useGlobalStore } from '@/store/modules'

const globalStore = useGlobalStore()
const breadcrumbList = [
  {
    path: '/home/index',
    meta: {
      icon: 'HomeFilled',
      title: '首页'
    }
  },
  {
    path: '/proTable',
    name: 'proTable',
    redirect: '/proTable/useProTable',
    meta: {
      icon: 'MessageBox',
      title: '超级表格',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: '/proTable/useProTable',
        name: 'useProTable',
        component: '/proTable/useProTable/index',
        meta: {
          icon: 'Menu',
          title: '使用 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        },
        children: [
          {
            path: '/proTable/useProTable/detail/:id',
            name: 'useProTableDetail',
            component: '/proTable/useProTable/detail',
            meta: {
              icon: 'Menu',
              title: 'ProTable 详情',
              isLink: '',
              isHide: true,
              isFull: false,
              isAffix: false,
              isKeepAlive: true,
              activeMenu: '/proTable/useProTable'
            }
          }
        ]
      },
      {
        path: '/proTable/useTreeFilter',
        name: 'useTreeFilter',
        component: '/proTable/useTreeFilter/index',
        meta: {
          icon: 'Menu',
          title: '使用 TreeFilter',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/useTreeFilter/detail/:id',
        name: 'useTreeFilterDetail',
        component: '/proTable/useTreeFilter/detail',
        meta: {
          icon: 'Menu',
          title: 'TreeFilter 详情',
          activeMenu: '/proTable/useTreeFilter',
          isLink: '',
          isHide: true,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/useSelectFilter',
        name: 'useSelectFilter',
        component: '/proTable/useSelectFilter/index',
        meta: {
          icon: 'Menu',
          title: '使用 SelectFilter',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/treeProTable',
        name: 'treeProTable',
        component: '/proTable/treeProTable/index',
        meta: {
          icon: 'Menu',
          title: '树形 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/complexProTable',
        name: 'complexProTable',
        component: '/proTable/complexProTable/index',
        meta: {
          icon: 'Menu',
          title: '复杂 ProTable',
          isLink: '',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      },
      {
        path: '/proTable/document',
        name: 'proTableDocument',
        component: '/proTable/document/index',
        meta: {
          icon: 'Menu',
          title: 'ProTable 文档',
          isLink: 'https://juejin.cn/post/7166068828202336263/#heading-14',
          isHide: false,
          isFull: false,
          isAffix: false,
          isKeepAlive: true
        }
      }
    ]
  },
  {
    path: '/proTable/useProTable',
    name: 'useProTable',
    component: '/proTable/useProTable/index',
    meta: {
      icon: 'Menu',
      title: '使用 ProTable',
      isLink: '',
      isHide: false,
      isFull: false,
      isAffix: false,
      isKeepAlive: true
    },
    children: [
      {
        path: '/proTable/useProTable/detail/:id',
        name: 'useProTableDetail',
        component: '/proTable/useProTable/detail',
        meta: {
          icon: 'Menu',
          title: 'ProTable 详情',
          isLink: '',
          isHide: true,
          isFull: false,
          isAffix: false,
          isKeepAlive: true,
          activeMenu: '/proTable/useProTable'
        }
      }
    ]
  }
]
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
