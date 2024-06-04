<!--
图标选择器-组件
-->

<template>
  <div class="select-icon w-full">
    <el-input v-model="icon" clearable placeholder="请选择图标" @click="handleOpen" @clear="handleClear">
      <template #append>
        <el-button :icon="icon" />
      </template>
    </el-input>

    <el-dialog v-model="visible" title="选择图标" width="70%" top="10vh">
      <el-input v-model.trim="keyword" prefix-icon="Search" placeholder="搜索图标" />
      <el-scrollbar v-if="Object.keys(iconList).length">
        <ul class="icon-list">
          <li v-for="item in iconList" :key="item.name" @click="handleSelect(item.name)">
            <el-icon size="40">
              <component :is="item.name" />
            </el-icon>
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </el-scrollbar>
      <el-empty v-else description="未搜索到您要找的图标~" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as Icons from '@element-plus/icons-vue'
import { computed, ref } from 'vue'

const emit = defineEmits<{
  'update:iconValue': [value: string]
}>()
const visible = ref(false)
const keyword = ref('')
const icon = ref()
const icons: { [key: string]: any } = Icons
const iconList = computed((): { [key: string]: any } => {
  if (!keyword.value) return icons
  const _keyword = keyword.value.toLowerCase()
  const result: { [key: string]: any } = {}
  Object.keys(icons).forEach((_) => {
    if (_.toLowerCase().includes(_keyword)) {
      result[_] = icons[_]
    }
  })
  return result
})

// 打开选择图标
function handleOpen() {
  visible.value = true
}

// 选择图标
function handleSelect(name: string) {
  icon.value = name
  visible.value = false
  emit('update:iconValue', name)
}

// 清除图标
function handleClear() {
  icon.value = ''
  emit('update:iconValue', '')
}
</script>

<style scoped lang="less">
@import 'style';
</style>
