<!--
关于项目
-->
<template>
  <div class="about">
    <div class="card">
      <h2 class="card-title">简介</h2>
      <p class="card-text">
        <el-link type="primary" href="https://docs.spicyboy.cn" target="_blank">Geeker-Admin</el-link>
        一款基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的后台管理框架，使用目前最新技术栈开发。项目提供强大的
        <el-link type="primary" href="https://juejin.cn/post/7166068828202336263" target="_blank">ProTable 组件</el-link>
        在一定程度上提高您的开发效率。另外本项目还封装了一些常用组件、Hooks、指令、动态路由、按钮级别权限控制等功能。
      </p>
    </div>

    <div class="card">
      <h2 class="card-title">项目信息</h2>
      <el-descriptions :column="2" border>
        <el-descriptions-item label="版本号"
          ><el-tag type="primary">{{ version }}</el-tag></el-descriptions-item
        >
        <el-descriptions-item label="发布时间"
          ><el-tag type="primary">{{ buildTime }}</el-tag></el-descriptions-item
        >
        <el-descriptions-item label="Gitee">
          <el-link type="primary" href="https://gitee.com/HalseySpicy/Geeker-Admin" target="_blank"> Gitee </el-link>
        </el-descriptions-item>

        <el-descriptions-item label="GitHbu">
          <el-link type="primary" href="https://github.com/HalseySpicy/Geeker-Admin" target="_blank"> Github </el-link>
        </el-descriptions-item>

        <el-descriptions-item label="文档地址">
          <el-link type="primary" href="https://docs.spicyboy.cn" target="_blank"> 文档地址 </el-link>
        </el-descriptions-item>

        <el-descriptions-item label="预览地址">
          <el-link type="primary" href="https://admin.spicyboy.cn" target="_blank"> 预览地址 </el-link>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <div class="card">
      <h2 class="card-title">生产环境依赖</h2>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="[key, val] of Object.entries(dependencies)" :key="key" :label="key">
          <el-tag type="info">{{ val }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <div class="card">
      <h2 class="card-title">开发环境依赖</h2>
      <el-descriptions :column="3" border>
        <el-descriptions-item v-for="[key, val] of Object.entries(devDependencies)" :key="key" :label="key">
          <el-tag type="info">{{ val }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { version, buildTime, dependencies, devDependencies } = __APP_INFO__
</script>

<style scoped lang="less">
.about {
  .card {
    margin-bottom: 1.5rem;
    .card-title {
      font-size: 1.1rem;
      margin-bottom: 15px;
      color: var(--el-text-color-primary);
    }
    .card-text {
      font-size: 15px;
      line-height: 25px;
      color: var(--el-text-color-primary);
      .el-link {
        font-size: 15px;
      }
    }
  }
}
</style>
