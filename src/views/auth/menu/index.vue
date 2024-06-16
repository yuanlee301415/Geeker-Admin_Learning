<template>
  <div class="card content-box auth-box">
    <h2>菜单权限 🍓🍇🍈🍉</h2>

    <el-alert :closable="false" type="success">
      目前菜单权限使用动态路由实现，模拟后台根据不同用户角色返回对应路由，注意观察左侧菜单变化（admin 账号可查看所有菜单、user 账号只可查看部分菜单）
    </el-alert>

    <div class="flx-center p-5">
      <el-button class="mt20" type="primary" @click="handleToLogin"> 登录其他账号 </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules'
import { HOME_URL } from '@/constants'
import { logoutApi } from '@/api/modules/rights'

const router = useRouter()
const userStore = useUserStore()

async function handleToLogin() {
  await logoutApi(userStore.info.id)
  userStore.setToken('')
  router.push(HOME_URL)
}
</script>

<style scoped lang="less">
@import '../style';
</style>
