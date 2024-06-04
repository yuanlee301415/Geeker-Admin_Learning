<!--
Echarts-组件
-->

<template>
  <div :style="chartStyle" ref="chartRef" />
</template>

<script setup lang="ts">
import type { EChartsType, ECElementEvent } from 'echarts/core'
import type { ECOption } from './config'

import { ref, computed, markRaw, onMounted, watch, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useDebounceFn } from '@vueuse/core'
import echarts from './config'
import { useGlobalStore } from '@/store/modules'

interface Props {
  option: ECOption
  renderer?: 'canvas' | 'svg'
  resize?: boolean
  theme?: Object | string
  width?: number | string
  height?: number | string
  onClick?: (event: ECElementEvent) => any
}

const props = withDefaults(defineProps<Props>(), {
  renderer: 'canvas',
  resize: true
})

const chartStyle = computed(() => ({
  width: props.width ? `${props.width}px` : '100%',
  height: props.height ? `${props.height}px` : '100%'
}))

const chartRef = ref<HTMLDivElement | HTMLCanvasElement>()
const chartInstance = ref<EChartsType>()
const globalStore = useGlobalStore()
const { isCollapse, maximize, tabs, footer } = storeToRefs(globalStore)
const debouncedResize = useDebounceFn(resizeChart, 300, { maxWait: 800 })

// 监听组件属性
watch(props, drawChart)

// 监听全局配置
watch([isCollapse, maximize, tabs, footer], debouncedResize)

onMounted(() => {
  setTimeout(init)
  window.addEventListener('resize', debouncedResize)
})

onBeforeMount(() => {
  chartInstance.value?.dispose()
  window.removeEventListener('resize', debouncedResize)
})

defineExpose({
  getChartInstance: () => chartInstance.value,
  resizeChart,
  drawChart
})

// 初始化
function init() {
  if (!chartRef.value) return
  chartInstance.value = echarts.getInstanceByDom(chartRef.value)

  if (!chartInstance.value) {
    chartInstance.value = markRaw(
      echarts.init(chartRef.value, props.theme, {
        renderer: props.renderer
      })
    )
    chartInstance.value.on('click', handleClick)
    drawChart()
  }
}

// 绘制图表
function drawChart() {
  chartInstance?.value?.setOption(props.option, { notMerge: true })
}

// 点击事件
function handleClick(event: ECElementEvent) {
  props.onClick?.(event)
}

// 调整图表大小
function resizeChart() {
  if (!chartInstance.value || !props.resize) return
  chartInstance.value.resize({ animation: { duration: 300 } })
}
</script>
