<!--
标签栏
-->
<template>
  <div class="tabs-box">
    <div class="tabs-wrap">
      <el-tabs v-model="activeName" type="card" @tab-click="onTabClick" @tab-remove="onTabRemove">
        <el-tab-pane
          v-for="item of tabsMenuList"
          :key="item.path"
          :name="item.path"
          :label="item.title"
          :closable="item.close"
        >
          <template #label>
            <el-icon v-if="globalStore.tabsIcon && item.icon" class="tabs-icon">
              <component :is="item.icon"/>
            </el-icon>
            {{ item.title }}
          </template>
        </el-tab-pane>
      </el-tabs>

      <MoreButton/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useGlobalStore} from "@/store/modules";
import MoreButton from './components/MoreButton/index.vue'

const globalStore = useGlobalStore()
const tabsMenuList = [
  {
    "icon": "HomeFilled",
    "title": "首页",
    "path": "/home",
    "name": "home",
    "close": false,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "使用 ProTable",
    "path": "/proTable/useProTable",
    "name": "useProTable",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "使用 TreeFilter",
    "path": "/proTable/useTreeFilter",
    "name": "useTreeFilter",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "使用 SelectFilter",
    "path": "/proTable/useSelectFilter",
    "name": "useSelectFilter",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "树形 ProTable",
    "path": "/proTable/treeProTable",
    "name": "treeProTable",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "复杂 ProTable",
    "path": "/proTable/complexProTable",
    "name": "complexProTable",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "菜单权限",
    "path": "/auth/menu",
    "name": "authMenu",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "按钮权限",
    "path": "/auth/button",
    "name": "authButton",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "引导页",
    "path": "/assembly/guide",
    "name": "guide",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "标签页操作",
    "path": "/assembly/tabs",
    "name": "tabs",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "图标选择器",
    "path": "/assembly/selectIcon",
    "name": "selectIcon",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "分类筛选器",
    "path": "/assembly/selectFilter",
    "name": "selectFilter",
    "close": true,
    "isKeepAlive": true
  },
  {
    "icon": "Menu",
    "title": "数据可视化",
    "path": "/dashboard/dataVisualize",
    "name": "dataVisualize",
    "close": true,
    "isKeepAlive": true
  }
]
const activeName = ref('')

function onTabClick() {

}

function onTabRemove() {

}
</script>

<style scoped lang="less">
@import "./style";
</style>
