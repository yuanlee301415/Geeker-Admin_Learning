<template>
  <div class="card content-box assembly-box">
    <h2>富文本编辑器 🍓🍇🍈🍉</h2>
    <WangEditor v-model:value="content" />

    <div class="py-5 text-center">
      <el-button type="primary" @click="handlePreview">预览</el-button>
    </div>

    <el-descriptions :column="1" title="配置项 📚" border>
      <el-descriptions-item label="value"
        >双向绑定的 value 值，使用示例： v-model:value="content"></el-descriptions-item
      >
      <el-descriptions-item label="toolbarConfig"
        >富文本 ToolBar区域 配置：
        <a href="https://www.wangeditor.com/v5/toolbar-config.html"
          >https://www.wangeditor.com/v5/toolbar-config.html</a
        ></el-descriptions-item
      >
      <el-descriptions-item label="editorConfig"
        >富文本 编辑区域 配置：
        <a href="https://www.wangeditor.com/v5/editor-config.html"
          >https://www.wangeditor.com/v5/editor-config.html</a
        ></el-descriptions-item
      >
      <el-descriptions-item label="height">富文本高度，默认为 500px</el-descriptions-item>
      <el-descriptions-item label="mode"
        >富文本模式，默认为 default（"default" | "simple"）</el-descriptions-item
      >
      <el-descriptions-item label="hideToolBar"
        >隐藏 ToolBar 区域，默认为 false</el-descriptions-item
      >
      <el-descriptions-item label="disabled">禁用富文本编辑器，默认为 false</el-descriptions-item>
    </el-descriptions>
    <el-dialog title="预览" v-model="visible" width="80vw" top="50px">
      <div v-html="content" style="height: 80vh" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WangEditor from '@/components/WangEditor/index.vue'

const content = ref('')
const visible = ref(false)

function handlePreview() {
  visible.value = true
}
</script>

<style scoped lang="less">
@import '../style';
</style>
