<template>
  <div>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox class="checkbox" v-model="checked" checked>备选项</el-checkbox>
    <el-tabs>
      <el-tab-pane label="用户管理"></el-tab-pane>
      <el-tab-pane label="配置管理"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        activeName: 'first'
      }
    }
  }
</script>
