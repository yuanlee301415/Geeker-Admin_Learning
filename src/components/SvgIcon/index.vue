<!--
SVG 图标
-->
<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed } from 'vue'

type Props = {
  name: string
  prefix?: string
  iconStyle?: CSSProperties
}
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  iconStyle: () => ({
    width: '3em',
    height: '3em'
  })
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
