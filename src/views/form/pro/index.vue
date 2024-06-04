<!--
超级表单
-->
<template>
  <div class="card content-box">
    <el-alert :closable="false" type="warning" class="mb-5"> 通过 `component :is` 属性动态渲染组件；通过 `v-bind` 传入组件属性； </el-alert>

    <component :is="'el-form'" :model="model" v-bind="options.formConfig">
      <template v-for="item of options.items" :key="item.formItem.prop">
        <component :is="'el-form-item'" v-bind="item.formItem">
          <component v-bind="item.component.props" v-model="model[item.formItem.prop]" :is="item.component.name" />
        </component>
      </template>
    </component>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive<Record<string, any>>({})

const options = reactive({
  // 整体表单配置项
  formConfig: {
    labelWidth: '120px',
    labelSuffix: '：'
  },

  // 表单项列表
  items: [
    {
      // ElFomItem 配置
      formItem: {
        label: '用户名',
        prop: 'username',
        required: true
      },

      // ElFomItem 内部控件配置
      component: {
        name: 'el-input',
        props: {
          placeholder: '请输入用户名',
          clearable: true
        }
      }
    },

    {
      formItem: {
        label: '密码',
        prop: 'password',
        required: true
      },
      component: {
        name: 'el-input',
        props: {
          type: 'password',
          placeholder: '请输入密码',
          clearable: true
        }
      }
    },
    {
      formItem: {
        label: '手机号',
        prop: 'phone',
        required: true
      },
      component: {
        name: 'el-input',
        props: {
          placeholder: '请输入手机号',
          clearable: true
        }
      }
    }
  ]
})
</script>

<style scoped lang="less"></style>
