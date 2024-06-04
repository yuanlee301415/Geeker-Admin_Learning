<!--
富文本编辑器组件
-->
<template>
  <div class="editor-box" :class="{ 'editor-disabled': isDisabled }">
    <Toolbar v-if="!hideToolbar" class="editor-toolbar" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <Editor
      v-model="valueHtml"
      class="editor-content"
      :style="{ height }"
      :mode="mode"
      :default-config="editorConfig"
      @on-created="handleCreated"
      @on-blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
import type { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { formContextKey, formItemContextKey } from 'element-plus'
import { computed, inject, onBeforeUnmount, shallowRef, watchEffect } from 'vue'
import '@wangeditor/editor/dist/css/style.css'

type Props = {
  // 富文本值
  value: string

  // 富文本工具栏配置
  toolbarConfig?: Partial<IToolbarConfig>

  // 富文本编辑器配置
  editorConfig?: Partial<IEditorConfig>

  // 是否隐藏工具栏
  hideToolbar?: boolean

  // 富文本高度
  height?: string

  // 富文本模式
  mode?: 'default' | 'simple'

  // 禁用
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  toolbarConfig: () => ({
    excludeKeys: []
  }),
  editorConfig: () => ({
    placeholder: '请输入内容...',
    MENU_CONF: {}
  }),
  hideToolbar: false,
  height: '300px',
  mode: 'default',
  disabled: false
})

const emit = defineEmits<{
  'update:value': [value: string]
  'check-validate': []
}>()

const editorRef = shallowRef()
const formContext = inject(formContextKey, void 0)
const formItemContext = inject(formItemContextKey, void 0)
const isDisabled = computed(() => props.disabled || formContext?.disabled)

const valueHtml = computed({
  get() {
    return props.value
  },
  set(val) {
    emit('update:value', editorRef.value.isEmpty() ? '' : val)
  }
})

watchEffect(() => {
  if (!editorRef.value) return
  props.disabled && editorRef.value.disable()
})

onBeforeUnmount(() => {
  if (!editorRef.value) return
  editorRef.value.destroy()
})

defineExpose({
  editor: editorRef
})

// 创建编辑器
function handleCreated(editor: any) {
  editorRef.value = editor
}

// 监听失去焦点
function handleBlur() {
  formItemContext?.prop && formContext?.validateField(formItemContext.prop)
}
</script>

<style scoped lang="less">
@import 'style';
</style>
