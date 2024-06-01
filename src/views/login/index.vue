<!--
登录
-->
<template>
  <div class="login-container flx-center">
    <div class="login-box">
      <SwitchDark class="login-box_dark" />
      <div class="login-box_left">
        <img class="w-full h-full" src="./images/login_left.png" alt="" />
      </div>
      <div class="login-box_form">
        <div class="login-logo flx-center">
          <img src="@/assets/logo.svg" alt="" />
          <h2>{{ title }}</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SwitchDark from '@/components/SwitchDark/index.vue'
import LoginForm from './components/LoginForm.vue'

const title = import.meta.env.VITE_APP_TITLE
</script>

<style scoped lang="less">
@import 'style';
</style>
