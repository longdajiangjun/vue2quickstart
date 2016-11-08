<template>
  <div>
    <el-button type="text" @click.native="isVisible = true">打开嵌套表格的 Dialog</el-button>
    <el-dialog title="收货地址" v-model="isVisible">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="10">
        </el-table-column>
        <el-table-column
          type="index"
          width="10">
        </el-table-column>
        <el-table-column
          property="difficulty"
          label="难度"
          width="10">
        </el-table-column>
        <el-table-column
          property="descript"
          label="知识点"
          width="220">
        </el-table-column>
        <el-table-column
          property="amount"
          label="题量">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Table, TableColumn, Tooltip, Checkbox} from 'element-ui'
  import equationService from '../../api/equationService'

  export default {
    data() {
      return {
        tableData: [],
        isVisible : true,
        singleSelection: {}
      }
    },
    mounted(){
      let self = this;
      equationService.queryByTFCode(1, 10, "RJXX02011901").then(function (datas) {
//          console.log("curPage",curPage);
        self.tableData = datas.list;
      });
    },
    methods: {

    }
  }
</script>
