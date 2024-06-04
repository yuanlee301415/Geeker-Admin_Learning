<!--
分类筛选器
-->

<template>
  <div class="card content-box assembly-box">
    <h2>分类筛选器 🍓🍇🍈🍉</h2>
    <SelectFilter :data="filterData" v-model="filterResult" />
    <pre>返回值：{{ filterResult }}</pre>

    <el-descriptions title="配置项 📚" :column="1" border>
      <el-descriptions-item label="v-model">选中的值</el-descriptions-item>
      <el-descriptions-item label="data">需要筛选的数据列表</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectFilter from '@/components/SelectFilter/index.vue'
import filterData from './filterData.json'

const filterResult = ref({ state: '3', type: ['1', '3'] })
</script>

<style scoped lang="less">
@import '../style';
</style>
