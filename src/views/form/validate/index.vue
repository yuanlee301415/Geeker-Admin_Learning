<!--
表单校验
-->

<template>
  <div class="card content-box">
    <el-form :model="validateFormData" :rules="formRules" ref="validateFormRef" label-width="100px">
      <el-form-item label="Name" prop="name">
        <el-input v-model="validateFormData.name" maxlength="10" />
      </el-form-item>

      <el-form-item label="Phone" prop="phone">
        <el-input v-model="validateFormData.phone" maxlength="11" />
      </el-form-item>

      <el-form-item label="Zone" prop="zone">
        <el-select v-model="validateFormData.zone" placeholder="Please select zone">
          <el-option v-for="zone of zones" :key="zone.value" :label="zone.label" :value="zone.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Date" required>
        <el-form-item prop="date">
          <el-date-picker v-model="validateFormData.date" type="date" placeholder="Pick a date" />
        </el-form-item>
        <span class="px-1 text-gray-500">-</span>
        <el-form-item prop="time">
          <el-time-picker v-model="validateFormData.time" type="time" placeholder="Pick a time" />
        </el-form-item>
      </el-form-item>

      <el-form-item label="Delivery" prop="delivery">
        <el-switch v-model="validateFormData.delivery" />
      </el-form-item>

      <el-form-item label="Resource" prop="resource">
        <el-select v-model="validateFormData.resource" placeholder="Please select resource">
          <el-option v-for="resource of resources" :key="resource.value" :label="resource.label" :value="resource.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Desc" prop="desc">
        <el-input v-model="validateFormData.desc" type="textarea" maxlength="30" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit(validateFormRef)">Submit</el-button>
        <el-button @click="handleReset(validateFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

import { reactive, ref } from 'vue'
import { validatePhoneNumber } from '@/utils/eleValidate'

type ValidateForm = {
  name: string
  phone: string
  zone: string
  date: string
  time: string
  delivery: boolean
  resource: string
  desc: string
}

const zones = reactive([
  {
    value: 'shanghai',
    label: 'Shanghai'
  },
  {
    value: 'beijing',
    label: 'Beijing'
  }
])

const resources = [
  {
    value: 'sponsorship',
    label: 'Sponsorship'
  },
  {
    value: 'venue',
    label: 'Venue'
  }
]

const validateFormData = reactive<ValidateForm>({
  name: '',
  phone: '',
  zone: '',
  date: '',
  time: '',
  delivery: false,
  resource: '',
  desc: ''
})

const formRules = reactive<FormRules<ValidateForm>>({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
  ],
  phone: [{ required: true, validator: validatePhoneNumber, trigger: 'blur' }],
  zone: [{ required: true, message: 'Please select zone', trigger: 'change' }],
  date: [{ type: 'date', required: true, message: 'Please select date', trigger: 'change' }],
  time: [{ type: 'date', required: true, message: 'Please select time', trigger: 'change' }],
  resource: [{ required: true, message: 'Please select resource', trigger: 'change' }],
  desc: [
    { required: true, message: 'Please input description', trigger: 'blur' },
    { min: 10, max: 30, message: 'Length should be 10 to 30', trigger: 'blur' }
  ]
})

const validateFormRef = ref<FormInstance>()

function handleSubmit(formRef: FormInstance | void) {
  if (!formRef) return
  formRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', validateFormData)
    } else {
      console.log('error submit!', fields)
      return false
    }
  })
}

function handleReset(formRef: FormInstance | void) {
  if (!formRef) return
  formRef.resetFields()
}
</script>

<style scoped lang="less"></style>
