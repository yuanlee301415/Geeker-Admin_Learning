<!--
登录表单
-->
<template>
  <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" size="large">
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        maxlength="10"
        placeholder="请输入用户名"
        prefix-icon="User"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        maxlength="16"
        show-password
        placeholder="请输入密码"
        prefix-icon="Lock"
      />
    </el-form-item>
    <div class="login-btn">
      <el-button round :icon="CircleClose" @click="resetForm">重置</el-button>
      <el-button type="primary" round :icon="UserFilled" :loading="loading" @click="login"
        >登录</el-button
      >
    </div>
  </el-form>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'

import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { CircleClose, UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { HOME_URL } from '@/constants'
import { getTimeState } from '@/utils'
import { loginApi } from '@/api/rights'
import { initDynamicRouter } from '@/router'
import { useTabsStore } from '@/store/modules/tabs'
import { useKeepAliveStore } from '@/store/modules/keepAlive'
import { useUserStore } from '@/store/modules/user'

type LoginForm = {
  username: string
  password: string
}

const router = useRouter()
const userStore = useUserStore()
const tabsStore = useTabsStore()
const keepAliveStore = useKeepAliveStore()

const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: '123456'
})
const loginRules: FormRules<LoginForm> = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
  ]
}
const loginFormRef = ref<FormInstance>()

const loading = ref(false)

onMounted(() => {
  document.onkeydown = (e: KeyboardEvent) => {
    e = (window.event as KeyboardEvent) || e
    if (['enter', 'Enter', 'NumpadEnter'].includes(e.code)) {
      if (loading.value) return
      login()
    }
  }
})

onBeforeUnmount(() => {
  document.onkeydown = null
})

function login() {
  loginFormRef.value!.validate(async (valid) => {
    if (!valid) return

    loading.value = true

    try {
      // 1.调用登录接口
      const userInfo = await loginApi(loginForm)
      userStore.setUserInfo(userInfo)
      userStore.setToken(((Math.random() * 1e8) | 0).toString(32))

      // 2.添加动态路由
      await initDynamicRouter()

      // 3.重置状态
      tabsStore.setTabs([])
      keepAliveStore.setKeepAliveNames([])

      // 4.跳转首页
      router.replace(HOME_URL)

      ElNotification({
        title: getTimeState(),
        message: '登录成功',
        type: 'success',
        duration: 2000
      })
    } finally {
      loading.value = false
    }
  })
}

function resetForm() {
  loginFormRef.value!.resetFields()
}
</script>

<style scoped lang="less">
.login-btn {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  .el-button {
    width: 45%;
  }
}
</style>
