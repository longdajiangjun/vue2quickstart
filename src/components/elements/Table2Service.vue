<template>
  <div>
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
    <div>hello kitty</div>
    <page v-on:changeCurPage="onChangeCurPage" :total="total"></page>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Table, TableColumn, Tooltip, Checkbox} from 'element-ui'
  import page from './page.vue'
  import equationService from '../../api/equationService'

  export default {
    components: {page},
    data() {
      return {
        tableData: [],
        total : 0,
        multiSelection: {}
      }
    },
    mounted(){
      let self = this;
      equationService.queryByTFCode(1,10,"RJXX02011901").then(function (datas) {
        self.tableData = datas.list;
        self.total= datas.total;
      });
    },
    methods: {
      handleSelectionChange(val) {
        this.multiSelection = val;
      },
      onChangeCurPage(curPage){
        let self = this;
        equationService.queryByTFCode(curPage,10,"RJXX02011901").then(function (datas) {
//          console.log("curPage",curPage);
          self.tableData = datas.list;
        });
      }
    }
  }
</script>
