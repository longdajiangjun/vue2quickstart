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
    <P></P>
    <P></P>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A" value="0"></el-checkbox>
      <el-checkbox label="复选框 B" value="1"></el-checkbox>
      <el-checkbox label="复选框 C" value="2"></el-checkbox>
      <el-checkbox label="复选框 D" value="3"></el-checkbox>
      <el-checkbox label="复选框 E" value="4"></el-checkbox>
    </el-checkbox-group>

    <span>{{spanValue}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        activeName: 'first',
        checkList: []
      }
    },
    computed : {
      spanValue : function() {
        let str ="";
        for(let index in this.checkList){
          str+=index+","
        }
        return str;
      }

    }
  }
</script>
