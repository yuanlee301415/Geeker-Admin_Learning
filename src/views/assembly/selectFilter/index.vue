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

const filterResult = ref({ state: '3', type: ['1', '3'] })
const filterData = [
  {
    title: '物流状态(单)',
    key: 'state',
    options: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '已下单',
        value: '1',
        icon: 'ShoppingCart'
      },
      {
        label: '已发货',
        value: '2',
        icon: 'Van'
      },
      {
        label: '已签收',
        value: '3',
        icon: 'Edit'
      },
      {
        label: '已退回',
        value: '4',
        icon: 'Guide'
      },
      {
        label: '已完成',
        value: '5',
        icon: 'CircleCheck'
      }
    ]
  },
  {
    title: '商品类型(多)',
    key: 'type',
    multiple: true,
    options: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '食品类',
        value: '1'
      },
      {
        label: '服装类',
        value: '2'
      },
      {
        label: '家具类',
        value: '3'
      },
      {
        label: '日用品类',
        value: '4'
      }
    ]
  }
]
</script>

<style scoped lang="less">
@import '../style';
</style>
