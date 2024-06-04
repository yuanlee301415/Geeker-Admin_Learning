<!--
详情页
-->

<template>
  <div class="card content-box assembly-box">
    <h2>我是 Tab 详情页 🍓🍇🍈🍉</h2>
    <h2>Params: {{ route.params }}</h2>
    <el-input v-model="value" :placeholder="`测试详情-${route.params.id}页缓存`"></el-input>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useTabsStore } from '@/store/modules/tabs'

const route = useRoute()
const tabsStore = useTabsStore()
const value = ref('')

tabsStore.setTabTitle(`Tab-${route.params.id} 详情`)
</script>

<style scoped lang="less">
@import '../style';
</style>
