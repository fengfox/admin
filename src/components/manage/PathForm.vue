<template>
   <el-form :inline="true" :model="pathForm" class="demo-form-inline">
    <el-form-item label="路线">
        <el-input v-model="pathForm.route" placeholder="路线"></el-input>
    </el-form-item>
    <el-form-item label="长度">
        <el-input v-model="pathForm.length" placeholder="长度"></el-input>
    </el-form-item>
    <el-form-item label="类型">
        <el-select v-model="pathForm.type" placeholder="类型">
        <el-option label="公司领导专用" value="1"></el-option>
        <el-option label="总工部专用" value="2"></el-option>
        </el-select>
    </el-form-item><el-form-item>
        <el-button type="success" @click="onSubmit">查询</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
    export default {
    data() {
      return {
        pathForm: {
          route: '',
          length: '',
          type:'1'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
    
</style>
