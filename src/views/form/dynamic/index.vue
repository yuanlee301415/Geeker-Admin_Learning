<!--
动态表单
-->
<template>
  <div class="card content-box">
    <el-form :model="dynamicFormData" ref="dynamicRef" label-width="100px">
      <el-form-item
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          }
        ]"
        prop="email"
        label="Email"
      >
        <el-input v-model="dynamicFormData.email"></el-input>
      </el-form-item>

      <el-form-item
        v-for="(domain, idx) of dynamicFormData.domains"
        :key="domain.key"
        :label="`Domain-${idx}`"
        :prop="`domains[${idx}].value`"
        :rules="[
          {
            required: true,
            message: 'Domain can not be null',
            trigger: 'blur'
          }
        ]"
        class="domain-item"
      >
        <el-input v-model="domain.value" />
        <el-button :disabled="dynamicFormData.domains.length > 10" @click="handleAdd(idx)">+</el-button>
        <el-button :disabled="dynamicFormData.domains.length <= 1" @click="handleRemove(idx)">-</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="handleSubmit(dynamicRef)">Submit</el-button>
        <el-button @click="handleReset(dynamicRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

type Domain = {
  key: string
  value: string
}

const dynamicFormData = reactive<{
  email: string
  domains: Domain[]
}>({
  email: '',
  domains: [
    {
      key: '0',
      value: ''
    }
  ]
})

const dynamicRef = ref<FormInstance>()

function handleAdd(idx: number) {
  dynamicFormData.domains.splice(idx + 1, 0, {
    key: Date.now().toString(36),
    value: ''
  })
}

function handleRemove(idx: number) {
  dynamicFormData.domains.splice(idx, 1)
}

function handleSubmit(formRef: FormInstance | void) {
  formRef?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', dynamicFormData)
      return
    }
    console.log('error submit!', fields)
  })
}

function handleReset(formRef: FormInstance | void) {
  formRef?.resetFields()
}
</script>

<style scoped lang="less">
.domain-item {
  :deep(.el-input) {
    flex: 1;
    margin-right: 20px;
  }
}
</style>
