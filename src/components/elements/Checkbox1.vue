<template>
  <div>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox class="checkbox" v-model="checked" checked>备选项</el-checkbox>
  </div>
</template>
<script>
  import {Checkbox} from 'element-ui'

  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
