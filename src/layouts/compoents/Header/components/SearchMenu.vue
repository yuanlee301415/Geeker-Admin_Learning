<!--
搜索菜单
-->
<template>
  <div class="header-toolbar_search">
    <i class="iconfont icon-sousuo" @click="handleOpen" />
    <el-dialog
      v-model="visible"
      :modal="false"
      :show-close="false"
      fullscreen
      destroy-on-close
      @click="handleClose"
    >
      <el-autocomplete
        ref="autocompleteRef"
        v-model="searchMenu"
        :fetch-suggestions="searchMenuList"
        value-key="path"
        placeholder="菜单搜索：支持菜单名称、路径"
        @click.stop
        @select="handleSelect"
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
import { computed, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

const authStore = useAuthStore()
const router = useRouter()
const visible = ref(false)
const searchMenu = ref('')
const autocompleteRef = ref()
const menuList = computed(() => authStore.flatMenuListGet.filter((_) => !_.meta.isHide))

// 打开搜索
function handleOpen() {
  visible.value = true
  setTimeout(() => {
    autocompleteRef.value.inputRef.focus()
  })
}

// 关闭搜索
function handleClose() {
  visible.value = false
  searchMenu.value = ''
}

// 搜索菜单
function filterMethod(queryString: string) {
  const qs = queryString.slice().trim().toLowerCase()
  return (item: Menu.MenuOptions) =>
    item.path.toLowerCase().includes(qs) || item.meta.title.toLowerCase().includes(qs)
}

// 搜索菜单列表
function searchMenuList(queryString: string, cb: any) {
  cb(queryString ? menuList.value.filter(filterMethod(queryString)) : menuList.value)
}

// 选择菜单
function handleSelect(item: Menu.MenuOptions) {
  if (item.meta.isLink) {
    window.open(item.meta.isLink, '_blank')
  } else {
    router.push(item.path)
  }
  handleClose()
}
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
