<!--
搜索菜单
-->
<template>
  <div class="header-toolbar_search">
    <i class="iconfont icon-sousuo" @click="visible = true" />
    <el-dialog
      v-model="visible"
      :modal="false"
      :show-close="false"
      fullscreen
      destroy-on-close
      @click="visible = false"
    >
      <el-autocomplete
        v-model="searchMenu"
        :fetch-suggestions="menuList"
        value-key="path"
        placeholder="菜单搜索：支持菜单名称、路径"
        @click.stop
      >
        <template #prefix>
          <el-icon>
            <component :is="Search" />
          </el-icon>
        </template>
        <template #default="{ item }">
          <el-icon>
            <component :is="item.meta.icon" />
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const visible = ref(false)
const searchMenu = ref('')
const menuList = [
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
.header-toolbar_search {
  :deep(.el-dialog) {
    background-color: rgba(0 0 0 /50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
    .el-input__wrapper {
      background-color: var(--el-bg-color);
    }
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    margin: 0 0 0 10px;
    font-size: 14px;
  }
}
</style>
