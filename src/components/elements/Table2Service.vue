<template>
  <el-table
    :data="tableData"
    selection-mode="multiple"
    border
    @selectionchange="handleSelectionChange"
    style="width: 100%">
    <el-table-column
      type="selection">
    </el-table-column>
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      property="difficulty"
      label="难度">
    </el-table-column>
    <el-table-column
      property="descript"
      label="知识点">
    </el-table-column>
    <el-table-column
      property="amount"
      label="题量">
    </el-table-column>
  </el-table>
</template>

<script type="text/ecmascript-6">
  import {Table, TableColumn, Tooltip, Checkbox} from 'element-ui'
  import equationService from '../../api/equationService'

  export default {

    data() {
      return {
        tableData: [],
        singleSelection: {}
      }
    },
    mounted(){
      let self = this;
      equationService.queryByTFCode(1,10,"RJXX02011901").then(function (datas) {
        self.tableData = datas.list;
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.singleSelection = val;
      }
    }
  }
</script>
