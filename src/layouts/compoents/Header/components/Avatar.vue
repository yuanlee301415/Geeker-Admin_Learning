<template>
  <el-dropdown>
    <el-avatar src="/avatar.gif" :szie="40"/>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-icon>
            <component :is="User"/>
          </el-icon>
          个人信息
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon>
            <component :is="Edit"/>
          </el-icon>
          修改密码
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon>
            <component :is="SwitchButton"/>
          </el-icon>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>

  </el-dropdown>
</template>

<script setup lang="ts">

import {User, Edit, SwitchButton} from "@element-plus/icons-vue";
</script>
