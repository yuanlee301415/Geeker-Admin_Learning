<!--
消息
-->

<template>
  <div class="message">
    <el-popover :width="310" trigger="click" :teleported="false">
      <template #reference>
        <el-badge value="5">
          <i class="iconfont icon-xiaoxi"></i>
        </el-badge>
      </template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="通知(5)" name="notice">
          <el-scrollbar max-height="320">
            <ul class="message-list">
              <li v-for="item of messages" :key="item.id">
                <el-avatar :src="item.type" :size="40" />
                <div>
                  <h6>{{ item.title }}</h6>
                  <time>{{ item.time }}</time>
                </div>
              </li>
            </ul>
          </el-scrollbar>
        </el-tab-pane>

        <el-tab-pane label="消息(0)" name="message">
          <el-empty description="暂无消息" />
        </el-tab-pane>

        <el-tab-pane label="待办(0)" name="todo">
          <el-empty description="暂无代办" />
        </el-tab-pane>
      </el-tabs>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const typeImgs = import.meta.glob('@/assets/images/msg-types/*.png', {
  eager: true,
  import: 'default'
})
const typeImgKeys = Object.keys(typeImgs)
const activeName = ref('notice')
const messages = Array.from({ length: 6 }, (_, idx) => ({
  id: idx,
  type: typeImgs[typeImgKeys[idx % typeImgKeys.length]],
  title: '一键三连 Geeker-Admin 🧡',
  time: `${idx * 10 + 1}分钟前`
}))
</script>

<style scoped lang="less">
.message {
  .message-list {
    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid var(--el-border-color-light);
      &:last-child {
        border-bottom: none;
      }
      time {
        color: var(--el-text-color-secondary);
      }
      div {
        padding-left: 20px;
        h6 {
          font-size: 1rem;
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>
