<template>
  <div class="content-box assembly-box">
    <SelectTree v-model="treeValue1" :data="data" title="部门列表（单选）" label="name" @change="handleChange" />

    <SelectTree v-model="treeValue2" :request-api="getDepartmentApi" multiple title="部门列表（多选）" label="name" @change="handleChange" />

    <div class="card desc-box">
      <h2>树形筛选器 🍓🍇🍈🍉</h2>
      <el-descriptions title="配置项 📚" :column="1" border>
        <el-descriptions-item label="requestApi">请求分类数据的 api</el-descriptions-item>
        <el-descriptions-item label="data">分类数据，如果有分类数据，则不会执行 api 请求</el-descriptions-item>
        <el-descriptions-item label="title">treeFilter 标题</el-descriptions-item>
        <el-descriptions-item label="id">选择的id，默认为 “id”</el-descriptions-item>
        <el-descriptions-item label="label">显示的label，默认为 “label”</el-descriptions-item>
        <el-descriptions-item label="multiple">是否为多选，默认为 false</el-descriptions-item>
        <el-descriptions-item label="defaultValue">默认选中的值</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { ElMessage } from 'element-plus'
import SelectTree from '@/components/SelectTree/index.vue'
import { getDepartmentApi } from '@/api/modules/rights'

const treeValue1 = ref<string>('112')
const treeValue2 = ref<string[]>(['112'])
const data = ref<User.DepartmentRes[]>()

watchEffect(async () => {
  data.value = await getDepartmentApi()
})

function handleChange(ids: string[]) {
  ElMessage.success(`选中的 id：[${ids}]`)
}
</script>

<style scoped lang="less">
.content-box {
  display: flex;
  gap: 10px;
  > * {
    height: 100%;
  }
  .select-tree {
    width: 300px;
  }
  .desc-box {
    flex: 1;
  }
}
</style>
