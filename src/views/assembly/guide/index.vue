<template>
  <div class="card content-box assembly-box">
    <h2>引导页 🍓🍇🍈🍉</h2>
    <el-alert :closable="false" type="warning">
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js.
    </el-alert>
    <el-button @click="guide.drive()"> 打开引导页 🤹‍♂️ </el-button>
  </div>
</template>

<script setup lang="ts">
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'

const guide = driver({
  allowClose: true,
  doneBtnText: '结束',
  nextBtnText: '下一步',
  prevBtnText: '上一步',
  steps: [
    {
      element: '#collapse',
      popover: {
        title: 'Collapse Icon',
        description: 'Open && Close sidebar',
        side: 'right'
      }
    },
    {
      element: '#breadcrumb',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        side: 'right'
      }
    },
    {
      element: '#assemblySize',
      popover: {
        title: 'Switch Assembly Size',
        description: 'Switch the system size',
        side: 'left'
      }
    },
    {
      element: '#language',
      popover: {
        title: 'Switch Language',
        description: 'Switch the system language',
        side: 'left'
      }
    },
    {
      element: '#searchMenu',
      popover: {
        title: 'Page Search',
        description: 'Page search, quick navigation',
        side: 'left'
      }
    },
    {
      element: '#themeSetting',
      popover: {
        title: 'Setting theme',
        description: 'Customize settings theme',
        side: 'left'
      }
    },
    {
      element: '#message',
      popover: {
        title: 'Message Notification',
        description: 'Can receive company information',
        side: 'left'
      }
    },
    {
      element: '#fullScreen',
      popover: {
        title: 'Full Screen',
        description: 'Full Screen, Exit The Full Screen Page',
        side: 'left'
      }
    }
  ]
})
</script>

<style scoped lang="less">
@import '../style';
.assembly-box {
  .el-button {
    margin-top: 20px;
  }
}
</style>
