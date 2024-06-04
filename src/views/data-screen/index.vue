<!--
数据大屏
-->

<template>
  <div class="data-screen w-full h-full">
    <div class="data-screen-box flex flex-col fixed overflow-hidden" ref="dataScreenRef">
      <!--Header-->
      <div class="ds-header flex">
        <h3 class="ds-header_left">
          <a href="/">首页</a>
        </h3>

        <div class="ds-header_center flex-1">
          <div class="ds-header_center__title">
            <h2>智慧旅游可视化大数据展示平台</h2>
            <h3>平台高峰预警信息（2条）</h3>
          </div>
        </div>

        <div class="ds-header_right">
          <h3>统计报告</h3>
          <h4>当前时间：{{ time }}</h4>
        </div>
      </div>
      <!--Header End-->

      <!--Main-->
      <div class="ds-main flex flex-1">
        <!--Main Left-->
        <div class="ds-main_left flex flex-col justify-between">
          <div class="ds-main_left__top">
            <dl class="ds-side-item">
              <dt><h3>实时游客统计</h3></dt>
              <dd>
                <RealTimeAccessChart />
              </dd>
            </dl>
          </div>

          <div class="ds-main_left__mid">
            <dl class="ds-side-item">
              <dt><h3>男女比例</h3></dt>
              <dd>
                <MaleFemaleRatioChart />
              </dd>
            </dl>
          </div>

          <div class="ds-main_left__bottom">
            <dl class="ds-side-item">
              <dt><h3>年龄比例</h3></dt>
              <dd>
                <AgeRatioChart />
              </dd>
            </dl>
          </div>
        </div>
        <!--Main Left End-->

        <!--Main Center-->
        <div class="ds-main_center flex-1 flex flex-col">
          <div class="ds-main_center__top flex-1">
            <h3>景区实时客流量</h3>
            <MapChart />
          </div>
          <div class="ds-main_center__bottom">
            <dl class="ds-side-item">
              <dt><h3>未来30天游客量趋势图</h3></dt>
              <dd>
                <OverNext30Chart />
              </dd>
            </dl>
          </div>
        </div>
        <!--Main Center End-->

        <!--Main Right-->
        <div class="ds-main_right flex flex-col justify-between">
          <div class="ds-main_right__top">
            <dl class="ds-side-item">
              <dt><h3>热门景区排行</h3></dt>
              <dd>
                <HotPlateChart />
              </dd>
            </dl>
          </div>
          <div class="ds-main_right__mid">
            <dl class="ds-side-item">
              <dt><h3>年度游客量对比</h3></dt>
              <dd>
                <AnnualUseChart />
              </dd>
            </dl>
          </div>
          <div class="ds-main_right__bottom">
            <dl class="ds-side-item">
              <dt><h3>预约渠道数据统计</h3></dt>
              <dd>
                <PlatformSourceChart />
              </dd>
            </dl>
          </div>
        </div>
        <!--Main Right End-->
      </div>
      <!--Main End-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import dayjs from 'dayjs'

import RealTimeAccessChart from './components/RealTimeAccessChart.vue'
import MaleFemaleRatioChart from './components/MaleFemaleRatioChart.vue'
import AgeRatioChart from './components/AgeRatioChart.vue'
import OverNext30Chart from './components/OverNext30Chart.vue'
import HotPlateChart from './components/HotPlateChart.vue'
import AnnualUseChart from './components/AnnualUseChart.vue'
import PlatformSourceChart from './components/PlatformSourceChart.vue'
import MapChart from './components/MapChart.vue'

const dataScreenRef = ref<HTMLElement | null>()
const WIDTH = 1920
const HEIGHT = 1080
const time = ref<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'))

// 当前时间
const timer = setInterval(() => {
  time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}, 1000)

onMounted(() => {
  zoom()
})

onBeforeUnmount(() => {
  clearInterval(timer)
  window.removeEventListener('resize', resize)
})

// 缩放
function zoom() {
  if (!dataScreenRef.value) return
  dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  dataScreenRef.value.style.width = `${WIDTH}px`
  dataScreenRef.value.style.height = `${HEIGHT}px`
  window.addEventListener('resize', resize)
}

// 窗口缩放
function resize() {
  if (!dataScreenRef.value) return
  dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

// 获取缩放比例
function getScale(width = WIDTH, height = HEIGHT) {
  const ww = window.innerWidth / width
  const wh = window.innerHeight / height
  return Math.min(ww, wh)
}
</script>

<style scoped lang="less">
@import 'style';
</style>
