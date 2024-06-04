<!--
分类选择器-组件
-->

<template>
  <div class="select-filter w-full">
    <dl v-for="item of data" :key="item.key" class="flex items-center py-4">
      <dt class="pr-4">{{ item.title }}:</dt>
      <dd>
        <el-button
          v-for="opt of item.options"
          :key="opt.value"
          :icon="opt.icon"
          :type="(item.multiple ? selected?.[item.key]?.includes(opt.value) : selected?.[item.key] === opt.value) ? 'primary' : ''"
          round
          @click="handleToggle(item, opt)"
          >{{ opt.label }}</el-button
        >
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

type Option = {
  label: string
  value: string
  icon?: string
}

type Data = {
  title: string
  key: string
  multiple?: boolean
  options: Option[]
}

type ModelValue = {
  [key: string]: any
}

const props = defineProps<{
  modelValue?: ModelValue
  data?: Data[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: ModelValue]
}>()

const selected = ref<ModelValue>({})

watch(
  () => props.modelValue,
  () => {
    props.data?.forEach((item) => {
      if (item.multiple) {
        selected.value[item.key] = props.modelValue?.[item.key] ?? ['']
      } else {
        selected.value[item.key] = props.modelValue?.[item.key] ?? ''
      }
    })
  },
  {
    deep: true,
    immediate: true
  }
)

// 切换选项
function handleToggle(item: Data, opt: Option) {
  if (item.multiple) {
    if (opt.value === '') {
      selected.value[item.key] = [''] // 选择了“全部”，清除其它选项
    } else {
      const idx = selected.value[item.key].indexOf(opt.value)
      selected.value[item.key] = selected.value[item.key].filter((_: string) => _ !== '') // 选择了其它选项，清除“全部”选项
      if (idx === -1) {
        selected.value[item.key].push(opt.value) // 添加选项
      } else {
        selected.value[item.key].splice(idx, 1) // 删除选项
      }
    }
  } else {
    selected.value[item.key] = opt.value
  }
  emit('update:modelValue', selected.value)
}
</script>

<style scoped lang="less">
@import 'style';
</style>
