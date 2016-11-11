<template>
  <div class="commom_page">
    <div class="block">
      <el-pagination
        @currentchange="handleCurrentChange"
        :current-page="1"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<style>
  .commom_page .el-pager li.active{
    background-color: #219B81;
    border-color: #219B81;
  }
  .commom_page .el-pager li:hover{
    color: #219B81;
  }
  .commom_page .el-pagination button:hover{
    color: #219B81;
  }
  .commom_page .el-pagination{
    color: #333;
    text-align: center;
    margin: 10px 0;
  }
</style>
<script type="text/ecmascript-6">
  import {Pagination} from 'element-ui'
  export default {
    props:{
      total : 0
    },
    methods: {
      handleCurrentChange(val) {
//        console.log(`当前页curPag: `, curPag);
        this.$emit('changeCurPage',val)
      }
    }
  }
</script>
