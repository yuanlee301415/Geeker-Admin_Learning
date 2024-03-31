<template>
  <el-drawer v-model="visible" size="300" title="布局设置">

    <!--布局样式-->
    <el-divider class="divider">
      <el-icon>
        <Notification/>
      </el-icon>
      布局样式
    </el-divider>

    <ul class="theme-layout theme-layout">
      <el-tooltip :show-after="200" content="纵向" placement="top">
        <li class="theme-layout__vertical" @click="setLayout(Layout.Vertical)">
          <div class="theme-layout__dark"></div>
          <div class="theme-layout__container">
            <div class="theme-layout__light"></div>
            <div class="theme-layout__content"></div>
          </div>
          <el-icon v-if="layout === Layout.Vertical">
            <CircleCheckFilled/>
          </el-icon>
        </li>
      </el-tooltip>

      <el-tooltip :show-after="200" content="经典" placement="top">
        <li class="theme-layout__classic" @click="setLayout(Layout.Classic)">
          <div class="theme-layout__dark"></div>
          <div class="theme-layout__container">
            <div class="theme-layout__light"></div>
            <div class="theme-layout__content"></div>
          </div>
          <el-icon v-if="layout === Layout.Classic">
            <CircleCheckFilled/>
          </el-icon>
        </li>
      </el-tooltip>

      <el-tooltip :show-after="200" content="横向" placement="top">
        <li class="theme-layout__transverse" @click="setLayout(Layout.Transverse)">
          <div class="theme-layout__dark"></div>
          <div class="theme-layout__content"></div>
          <el-icon v-if="layout === Layout.Transverse">
            <CircleCheckFilled/>
          </el-icon>
        </li>
      </el-tooltip>

      <el-tooltip :show-after="200" content="分栏" placement="top">
        <li class="theme-layout__columns" @click="setLayout(Layout.Columns)">
          <div class="theme-layout__dark"></div>
          <div class="theme-layout__light"></div>
          <div class="theme-layout__content"></div>
          <el-icon v-if="layout === Layout.Columns">
            <CircleCheckFilled/>
          </el-icon>
        </li>
      </el-tooltip>
    </ul>

    <dl class="theme-item">
      <dt>
        侧边栏反转色
        <el-tooltip content="侧边栏颜色变为深色模式" placement="top">
          <el-icon>
            <QuestionFilled/>
          </el-icon>
        </el-tooltip>
      </dt>
      <dd>
        <el-switch v-model="asideInverted"></el-switch>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        头部反转色
        <el-tooltip content="头部反转色" placement="top">
          <el-icon>
            <QuestionFilled/>
          </el-icon>
        </el-tooltip>
      </dt>
      <dd>
        <el-switch v-model="headerInverted"></el-switch>
      </dd>
    </dl>
    <!--布局样式 End-->

    <!--全局主题-->
    <el-divider class="divider">
      <el-icon>
        <ColdDrink/>
      </el-icon>
      布局样式
    </el-divider>

    <dl class="theme-item">
      <dt>
        主题颜色
      </dt>
      <dd>
        <el-color-picker v-model="primary"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        暗黑模式
      </dt>
      <dd>
        <el-switch v-model="isDark" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        灰色模式
      </dt>
      <dd>
        <el-switch v-model="isGrey"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        色弱模式
      </dt>
      <dd>
        <el-switch v-model="isWeak"/>
      </dd>
    </dl>
    <!--全局主题 End-->

    <!--界面设置-->
    <el-divider class="divider">
      <el-icon>
        <Setting/>
      </el-icon>
      界面设置
    </el-divider>
    <dl class="theme-item">
      <dt>
        菜单折叠
      </dt>
      <dd>
        <el-switch v-model="isCollapse"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        菜单手风琴
      </dt>
      <dd>
        <el-switch v-model="accordion"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        面包屑
      </dt>
      <dd>
        <el-switch v-model="breadcrumb"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        面包屑图标
      </dt>
      <dd>
        <el-switch v-model="breadcrumbIcon"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        标签栏
      </dt>
      <dd>
        <el-switch v-model="tabs"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        标签栏图标
      </dt>
      <dd>
        <el-switch v-model="tabsIcon"/>
      </dd>
    </dl>

    <dl class="theme-item">
      <dt>
        页脚
      </dt>
      <dd>
        <el-switch v-model="footer"/>
      </dd>
    </dl>
    <!--界面设置 End-->

  </el-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {CircleCheckFilled, ColdDrink, Moon, Notification, QuestionFilled, Setting, Sunny} from '@element-plus/icons-vue'
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/store/modules";
import {Layout} from "@/constants";
import mittBus from "@/utils/mittBus";

const globalStore = useGlobalStore()
const {asideInverted, headerInverted, primary, isDark, isWeak, isGrey, isCollapse, accordion, breadcrumb, breadcrumbIcon, tabs, tabsIcon, footer, layout} = storeToRefs(globalStore)

const visible = ref(false)
mittBus.on('openThemeDrawer', () => visible.value = true)

function setLayout(layout: Layout) {
  globalStore.setLayout(layout)

  // Todo: setAsideTheme()
}
</script>

<style scoped lang="less">
@import "style";
</style>
