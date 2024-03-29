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
            <el-icon v-if="tabsIcon && item.icon" class="tabs-icon">
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
import MoreButton from './components/MoreButton/index.vue'
import {ref} from "vue";

const tabsMenuList = [
  {
    "icon": "HomeFilled",
    "title": "首页",
    "path": "/",
    "name": "home",
    "close": false,
    "isKeepAlive": true
  },
  {
    "icon": "InfoFilled",
    "title": "关于项目",
    "path": "/about/index",
    "name": "about",
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
const tabsIcon = ref(true)
const activeName = ref('/')

function onTabClick() {

}

function onTabRemove() {

}
</script>

<style scoped lang="less">
@import "./style";
</style>
