<!--
主题设置
-->
<template>
  <el-drawer v-model="visible" size="300" title="主题设置">
    <div class="theme-drawer">

      <!--布局方式-->
      <el-divider class="divider">
        <el-icon>
          <Notification/>
        </el-icon>
        布局方式
      </el-divider>

      <ul class="theme-layout theme-layout">
        <el-tooltip :show-after="200" content="纵向" placement="top">
          <li class="theme-layout__vertical" @click="handleChooseLayout(Layout.Vertical)">
            <div class="theme-layout__dark"></div>
            <div class="theme-layout__container">
              <div class="theme-layout__light"></div>
              <div class="theme-layout__content"></div>
            </div>
            <el-icon v-if="globalStore.layout === Layout.Vertical">
              <CircleCheckFilled/>
            </el-icon>
          </li>
        </el-tooltip>

        <el-tooltip :show-after="200" content="经典" placement="top">
          <li class="theme-layout__classic" @click="handleChooseLayout(Layout.Classic)">
            <div class="theme-layout__dark"></div>
            <div class="theme-layout__container">
              <div class="theme-layout__light"></div>
              <div class="theme-layout__content"></div>
            </div>
            <el-icon v-if="globalStore.layout === Layout.Classic">
              <CircleCheckFilled/>
            </el-icon>
          </li>
        </el-tooltip>

        <el-tooltip :show-after="200" content="横向" placement="top">
          <li class="theme-layout__transverse" @click="handleChooseLayout(Layout.Transverse)">
            <div class="theme-layout__dark"></div>
            <div class="theme-layout__content"></div>
            <el-icon v-if="globalStore.layout === Layout.Transverse">
              <CircleCheckFilled/>
            </el-icon>
          </li>
        </el-tooltip>

        <el-tooltip :show-after="200" content="分栏" placement="top">
          <li class="theme-layout__columns" @click="handleChooseLayout(Layout.Columns)">
            <div class="theme-layout__dark"></div>
            <div class="theme-layout__light"></div>
            <div class="theme-layout__content"></div>
            <el-icon v-if="globalStore.layout === Layout.Columns">
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
          <el-switch v-model="globalStore.asideInverted" @change="setAsideTheme"></el-switch>
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
          <el-switch v-model="globalStore.headerInverted" @change="setHeaderTheme"></el-switch>
        </dd>
      </dl>
      <!--布局方式 End-->

      <!--全局主题-->
      <el-divider class="divider">
        <el-icon>
          <ColdDrink/>
        </el-icon>
        全局主题
      </el-divider>

      <dl class="theme-item">
        <dt>
          主题颜色
        </dt>
        <dd>
          <el-color-picker v-model="globalStore.primary" :predefine="colorList" @change="changePrimary"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          暗黑模式
        </dt>
        <dd>
          <SwitchDark/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          灰色模式
        </dt>
        <dd>
          <el-switch v-model="globalStore.isGrey" @change="changeGreyOrWeak(GreyOrWeakEnum.Grey, $event)"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          色弱模式
        </dt>
        <dd>
          <el-switch v-model="globalStore.isWeak" @change="changeGreyOrWeak(GreyOrWeakEnum.Weak, $event)"/>
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
          <el-switch v-model="globalStore.isCollapse"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          菜单手风琴
        </dt>
        <dd>
          <el-switch v-model="globalStore.accordion"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          面包屑
        </dt>
        <dd>
          <el-switch v-model="globalStore.breadcrumb"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          面包屑图标
        </dt>
        <dd>
          <el-switch v-model="globalStore.breadcrumbIcon"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          标签栏
        </dt>
        <dd>
          <el-switch v-model="globalStore.tabs"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          标签栏图标
        </dt>
        <dd>
          <el-switch v-model="globalStore.tabsIcon"/>
        </dd>
      </dl>

      <dl class="theme-item">
        <dt>
          页脚
        </dt>
        <dd>
          <el-switch v-model="globalStore.footer"/>
        </dd>
      </dl>
      <!--界面设置 End-->

    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {CircleCheckFilled, ColdDrink, Notification, QuestionFilled, Setting} from '@element-plus/icons-vue'
import {useGlobalStore} from "@/store/modules";
import {GreyOrWeakEnum, Layout} from "@/constants";
import mittBus from "@/utils/mittBus";
import {useTheme} from "@/hooks/useTheme";
import {DEFAULT_PRIMARY} from "@/config";
import SwitchDark from '@/components/SwitchDark/index.vue'

const globalStore = useGlobalStore()
const { setAsideTheme, setHeaderTheme, changePrimary, changeGreyOrWeak } = useTheme()
const visible = ref(false)
const colorList = [
    DEFAULT_PRIMARY,
  "#daa96e",
  "#0c819f",
  "#409eff",
  "#27ae60",
  "#ff5c93",
  "#e74c3c",
  "#fd726d",
  "#f39c12",
  "#9b59b6"
]

// 打开主题设置弹窗
mittBus.on('openThemeDrawer', () => visible.value = true)

// 选择布局方式
function handleChooseLayout(layout: Layout) {
  globalStore.setLayout(layout)
  setAsideTheme()
}
</script>

<style scoped lang="less">
@import "style";
</style>
