<!--
拖拽组件
-->
<template>
  <div class="card content-box">
    <draggable v-model="list" item-key="id" class="grid-box" chosen-class="chosen">
      <template #item="{ element }">
        <div :class="['item', 'item-' + element.num]">{{ element.num }}</div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([
  { id: 0, num: 1 },
  { id: 1, num: 2 },
  { id: 2, num: 3 },
  { id: 3, num: 4 },
  { id: 4, num: 5 },
  { id: 5, num: 6 },
  { id: 6, num: 7 },
  { id: 7, num: 8 },
  { id: 8, num: 9 }
])
</script>

<style scoped lang="less">
@import 'style';
</style>
