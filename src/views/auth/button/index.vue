<template>
  <div class="card content-box auth-box">
    <h2>按钮权限 🍓🍇🍈🍉</h2>

    <el-alert :closable="false" type="success"> 当前用户按钮权限：{{ JSON.stringify(Object.keys(BUTTONS)) }} </el-alert>
    <el-divider content-position="left"> 使用 Hooks 方式绑定权限 </el-divider>

    <el-row class="p-5">
      <el-button v-if="BUTTONS.add" type="primary">新增</el-button>
      <el-button v-if="BUTTONS.edit" type="warning">编辑</el-button>
      <el-button v-if="BUTTONS.delete" type="danger">删除</el-button>
      <el-button v-if="BUTTONS.import" type="warning">导入数据</el-button>
      <el-button v-if="BUTTONS.export" type="info">导出数据</el-button>
    </el-row>

    <el-divider content-position="left"> 使用 v-auth 指令绑定单个权限 </el-divider>

    <el-row class="p-5">
      <el-button v-auth="AuthButton.Add" type="primary">新增</el-button>
      <el-button v-auth="AuthButton.Edit" type="warning">编辑</el-button>
      <el-button v-auth="AuthButton.Delete" type="danger">删除</el-button>
      <el-button v-auth="AuthButton.Import" type="warning">导入数据</el-button>
      <el-button v-auth="AuthButton.Export" type="info">导出数据</el-button>
    </el-row>

    <el-divider content-position="left"> 使用 v-auth 指令绑定多个权限 </el-divider>
    <el-row class="p-5">
      <el-button v-auth="[AuthButton.Add, AuthButton.Edit, AuthButton.Export]" type="primary">新增</el-button>
      <el-button v-auth="[AuthButton.Add, AuthButton.Edit, AuthButton.Export]" type="warning">编辑</el-button>
      <el-button v-auth="[AuthButton.Add, AuthButton.Edit, AuthButton.Export, AuthButton.Delete, AuthButton.Import]" type="danger">删除</el-button>
      <el-button v-auth="[AuthButton.Add, AuthButton.Edit, AuthButton.Export, AuthButton.Delete, AuthButton.Import]" type="warning"
        >导入数据</el-button
      >
      <el-button v-auth="[AuthButton.Add, AuthButton.Edit, AuthButton.Export]" type="info">导出数据</el-button>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { useAuthButtons } from '@/hooks/useAuthButtons'
import { AuthButton } from '@/enums/authButton'

const { BUTTONS } = useAuthButtons()
</script>

<style scoped lang="less">
@import '../style';
</style>
