<template>
  <el-table
    :data="tableData"
    selection-mode="multiple"
    @selectionchange="handleSelectionChange"
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
      this.$nextTick(() => {
        equationService.queryByTFCode(1,10,"RJXX02011901").then(tableData => this.tableData = tableData);
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.singleSelection = val;
      }
    }
  }
</script>
