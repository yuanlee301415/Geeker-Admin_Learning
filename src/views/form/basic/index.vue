<!--
基础表单
-->
<template>
  <div class="card content-box">
    <el-form :model="basicFormData" label-width="100px">
      <el-form-item label="Name" prop="name">
        <el-input v-model="basicFormData.name" placeholder="Please input" />
      </el-form-item>

      <el-form-item label="Zone" prop="zone">
        <el-select v-model="basicFormData.zone" placeholder="Please input">
          <el-option v-for="item in zones" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="DateTime">
        <el-date-picker v-model="basicFormData.date" type="date" placeholder="Please pick a date" />
        <span class="px-4 text-gray-500">-</span>
        <el-time-picker v-model="basicFormData.time" type="time" placeholder="Please pick a time" />
      </el-form-item>

      <el-form-item label="Delivery" prop="delivery">
        <el-switch v-model="basicFormData.delivery" />
      </el-form-item>

      <el-form-item label="Type" prop="type">
        <el-checkbox-group v-model="basicFormData.type">
          <el-checkbox v-for="item in types" :key="item.value" :label="item.label" :value="item.value" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resource" prop="resource">
        <el-radio-group v-model="basicFormData.resource" placeholder="Please input">
          <el-radio v-for="item in resources" :key="item.value" :label="item.label" :value="item.value" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Desc" prop="desc">
        <el-input v-model="basicFormData.desc" type="textarea" placeholder="Please input" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const zones = [
  {
    value: 'shanghai',
    label: 'Shanghai'
  },
  {
    value: 'beijing',
    label: 'Beijing'
  }
]

const types = [
  {
    value: 'Online',
    label: 'online'
  },
  {
    value: 'Promotion',
    label: 'promotion'
  },
  {
    value: 'Offline',
    label: 'offline'
  },
  {
    value: 'Other',
    label: 'other'
  }
]

const resources = [
  {
    value: 'Sponsorship',
    label: 'sponsorship'
  },
  {
    value: 'Venue',
    label: 'venue'
  }
]

const basicFormData = reactive({
  name: 'Geeker-admin',
  zone: '',
  date: '',
  time: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

function handleSubmit() {
  console.log(basicFormData)
}
</script>

<style scoped></style>
