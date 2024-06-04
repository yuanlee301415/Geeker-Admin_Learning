<!--
树形选择器-组件
-->

<template>
  <div class="card select-tree">
    <h3>{{ title }}</h3>
    <el-input v-model="filterText" placeholder="输入关键字进行过滤" clearable style="margin-bottom: 1rem" @clear="handleClear" />
    <el-scrollbar>
      <el-tree
        :show-checkbox="multiple"
        :filter-node-method="filterNodeMethod"
        :data="treeData"
        :default-checked-keys="multiple ? modelValue : []"
        :props="{
          label,
          children: 'children'
        }"
        :expand-on-click-node="false"
        :current-node-key="!multiple ? selected : ''"
        ref="treeRef"
        node-key="id"
        default-expand-all
        highlight-current
        check-on-click-node
        @node-click="handleNodeClick"
        @check="handleCheck"
      />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts" generic="T extends { [key: string]: any }">
import { ref, watch, watchEffect } from 'vue'

type Props = {
  // 组件标题
  title?: string
  // 是否多选
  multiple?: boolean
  // 绑定值
  modelValue?: string | string[]
  // 获取数据
  requestApi?: () => Promise<T[]>
  // ElTree 节点数据中用于唯一标识节点的属性名
  id?: string
  // ElTree 节点数据中用于节点 label 显示的属性名
  label?: string
  // ElTree 数据
  data?: T[]
}

const props = withDefaults(defineProps<Props>(), {
  id: 'id',
  label: 'label'
})
const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
  change: [ids: string[]]
}>()

// 数据
const treeData = ref<T[]>()

const treeRef = ref()

// 选中
const selected = ref<string | string[]>()

// 过滤关键字
const filterText = ref('')

// 过滤节点
const filterNodeMethod = (value: string, data: T, node: T) => {
  if (!value) return true
  let parent = node.parent
  let labels = [node.label]
  let level = 1
  while (parent && level < node.level) {
    labels = [...labels, parent.label]
    parent = parent.parent
    level++
  }
  return labels.some((label) => label.includes(value))
}

watch(
  () => props.modelValue,
  () => {
    setSelected()
  },
  {
    deep: true,
    immediate: true
  }
)

watch(
  () => props.data,
  (data) => {
    !props.requestApi && data && setData(data)
  },
  {
    deep: true,
    immediate: true
  }
)

// 过滤
watch(
  () => filterText.value,
  (value) => {
    treeRef.value.filter(value)
  }
)

// 请求数据
watchEffect(async () => {
  if (props.requestApi) {
    const data = await props.requestApi()
    setData(data)
  }
})

// 设置选中
function setSelected() {
  if (props.multiple) {
    selected.value = Array.isArray(props.modelValue) ? props.modelValue : []
  } else {
    selected.value = typeof props.modelValue === 'string' ? props.modelValue : ''
  }
}

// 设置数据
function setData(data: T[]) {
  if (props.multiple) {
    treeData.value = data
  } else {
    treeData.value = [{ [props.id]: '', [props.label]: '全部' } as T, ...data]
  }
}

// 点击节点，更新 `modelValue`
function handleNodeClick(node: T) {
  if (props.multiple) return
  emit('update:modelValue', node[props.id])
  emit('change', node[props.id])
}

// 勾选节点，更新 `modelValue`
function handleCheck(node: T, { checkedKeys }: { checkedKeys: string[] }) {
  console.log(arguments)
  if (!props.multiple) return
  emit('update:modelValue', checkedKeys)
  emit('change', checkedKeys)
}

// 清空过滤
function handleClear() {
  filterText.value = ''
}
</script>

<style scoped lang="less">
@import 'style';
</style>
