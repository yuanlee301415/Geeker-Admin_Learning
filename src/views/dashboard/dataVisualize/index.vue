<!--
数据可视化
-->
<template>
  <div class="content-box dashboard">
    <div class="card dashboard-top">
      <h2>数据可视化</h2>
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="tab of tabs" :key="tab.name" :label="tab.label" :name="tab.name"></el-tab-pane>
      </el-tabs>
      <el-row :gutter="40">
        <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="dashboard-top_box dashboard-total">
            <h3>访问总数</h3>
            <div class="flx-center">
              <img src="./images/book-sum.png" width="65" />
            </div>
            <h6>1000</h6>
          </div>
        </el-col>

        <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <ul class="dashboard-top_box dashboard-traffic">
            <li>
              <div class="flx-center">
                <img src="./images/add_person.png" alt="" />
              </div>
              <h4>2222</h4>
              <p>Gitee 访问量</p>
            </li>
            <li>
              <div class="flx-center">
                <img src="./images/add_team.png" alt="" />
              </div>
              <h4>3333</h4>
              <p>GitHub 访问量</p>
            </li>
            <li>
              <div class="flx-center">
                <img src="./images/today.png" alt="" />
              </div>
              <h4>4444</h4>
              <p>今日访问量</p>
            </li>
            <li>
              <div class="flx-center">
                <img src="./images/book_sum.png" alt="" />
              </div>
              <h4>5555</h4>
              <p>昨日访问量</p>
            </li>
          </ul>
        </el-col>

        <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="10" :xl="10">
          <dl class="dashboard-top_box dashboard-top_pie">
            <dt><h3>Gitee / GitHub 访问量占比</h3></dt>
            <dd>
              <Pie />
            </dd>
          </dl>
        </el-col>
      </el-row>
    </div>

    <div class="card dashboard-bottom">
      <div class="dashboard-bottom_tabs">
        <el-tabs v-model="activeName">
          <el-tab-pane v-for="tab of tabs" :key="tab.name" :label="tab.label" :name="tab.name"></el-tab-pane>
        </el-tabs>
      </div>
      <dl class="dashboard-bottom_chart">
        <dt><h2>数据来源</h2></dt>
        <dd>
          <Bar />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Pie from './components/Pie.vue'
import Bar from './components/Bar.vue'

const activeName = ref(1)
const tabs = [
  { label: '未来7日', name: 1 },
  { label: '近七日', name: 2 },
  { label: '近一月', name: 3 },
  { label: '近三月', name: 4 },
  { label: '近半年', name: 5 },
  { label: '近一年', name: 6 }
]
</script>

<style scoped lang="less">
@import 'style';
</style>
