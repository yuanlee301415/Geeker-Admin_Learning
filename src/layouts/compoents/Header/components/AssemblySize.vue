<!--
组件大小
-->

<template>
  <el-dropdown trigger="click" @command="globalStore.setAssemblySize">
    <i class="iconfont icon-contentright"></i>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of assemblySizeList"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === globalStore.assemblySize"
          >{{ item.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { AssemblySize } from '@/constants'
import { useGlobalStore } from '@/store/modules'

const assemblySizeList = [
  { label: '默认', value: AssemblySize.Default },
  { label: '大型', value: AssemblySize.Large },
  { label: '小型', value: AssemblySize.Small }
]
const globalStore = useGlobalStore()
</script>
