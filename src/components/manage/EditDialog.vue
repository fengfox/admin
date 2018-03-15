<template>
<div>
<el-button type="text" @click="dialogFormVisible=true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="路径" :visible.sync="dialogFormVisible">
  <el-form :model="form">
  <el-form-item label="id" :label-width="formLabelWidth" style="display:none">
      <el-input v-model="form.id" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="路线" :label-width="formLabelWidth">
      <el-input v-model="form.route" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="长度" :label-width="formLabelWidth">
      <el-input v-model="form.length" auto-complete="off"></el-input>
    </el-form-item>
	    <el-form-item label="范围" :label-width="formLabelWidth">
      <el-input v-model="form.ran" auto-complete="off"></el-input>
    </el-form-item>
	    <el-form-item label="类型" :label-width="formLabelWidth">
      <el-input v-model="form.type" auto-complete="off"></el-input>
    </el-form-item>
	    <el-form-item label="次数" :label-width="formLabelWidth">
      <el-input v-model="form.time" auto-complete="off"></el-input>
    </el-form-item>
	    </el-form-item>
	    <el-form-item label="备注" :label-width="formLabelWidth">
      <el-input v-model="form.remark" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false;">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false;">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
  import bus from '../common/bus';
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
		  id:'',
          route: '',
          length: '',
          ran: '',
          type: '',
          time: '',
          remark: ''
        },
		tmpForm: {
		  id:'',
          route: '',
          length: '',
          ran: '',
          type: '',
          time: '',
          remark: ''
        },
		
        formLabelWidth: '120px'
      };
    },
	mounted:function ()  {
	
    		bus.$on('edit', (params)=>{
    		//必须使用箭头函数，不然根本取不到this
    		this.form.route=params.rowData['route'];
    		this.form.length=params.rowData['length'];
    		this.form.ran=params.rowData['ran'];
    		this.form.type=params.rowData['type'];
    		this.form.time=params.rowData['time'];
    		this.form.remark=params.rowData['remark'];
    		this.form.id=params.rowData['id'];
    		this.dialogFormVisible=true;
	   });
    		bus.$on('add', ()=>{
    		//必须使用箭头函数，不然根本取不到this
    		this.form.id='';
    		this.form.route='';
    		this.form.length='';
    		this.form.ran='';
    		this.form.type='';
    		this.form.time='';
    		this.form.remark='';
    		this.dialogFormVisible=true;
	   });
		//post增加一个path

   }

	
  };
</script>