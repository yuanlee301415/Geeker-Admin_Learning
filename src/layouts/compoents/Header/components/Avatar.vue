<!--
用户头像
-->
<template>
  <el-dropdown trigger="click">
    <el-avatar :src="AvatarImg" :szie="40" class="cursor-pointer" />

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon>
            <User />
          </el-icon>
          个人信息
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon>
            <Edit />
          </el-icon>
          修改密码
        </el-dropdown-item>

        <el-dropdown-item divided @click="handleLogout">
          <el-icon>
            <SwitchButton />
          </el-icon>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { User, Edit, SwitchButton } from '@element-plus/icons-vue'
import AvatarImg from '@/assets/images/avatar.jpg'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { LOGIN_URL } from '@/constants'
import { logoutApi } from '@/api/rights'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

function handleLogout() {
  ElMessageBox.confirm('确定退出登录吗？', '提示', {
    type: 'warning'
  }).then(async () => {
    // 1.调用退出登录接口
    await logoutApi(userStore.info.id)

    // 2.清除 Token
    userStore.setToken('')

    // 3.跳转到登录页
    router.replace(LOGIN_URL)

    ElMessage.success('退出登录成功！')
  })
}
</script>
