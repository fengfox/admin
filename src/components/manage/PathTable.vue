<template>
<div>
	<el-button  @click="addPath">新增</el-button>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            @on-custom-comp="customCompFunc"
    ></v-table>
	
</div>
</template>




<script>

    import Vue from 'vue';
	import bus from '../common/bus';
    export default{
        data() {
            return {
                tableData: [
                        {"route":"公司-机场-公司","id":"1","length":"20","ran":"5","type":"1","time":"2","remark":"备注1"},
                       
                     ],
                    columns: [
                        {field: 'custome', title:'序号', width: 50, titleAlign: 'center', columnAlign: 'center',isFrozen: true,isResize:true,
						formatter: function (rowData,rowIndex,pagingIndex,field) {
                                return rowIndex + 1
                            }},
						{field: 'id', title:'id',width: 50, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'route', title:'路线', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'length', title: '长度', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'ran', title: '范围', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'type', title: '类型', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
						formatter: function (rowData,rowIndex,pagingIndex,field) {
                                return rowData.type==1?"公司领导专用":"总工部专用";
                            }},
						{field: 'time', title: '次数', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
						{field: 'remark', title: '备注', width: 200, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'custome-adv', title: '操作',width: 200, titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
                    ],
					

            }
        },
        
        computed()
        {        
           this.tableData=this.$store.state.data;

        },

        mounted(){
            this.tableData=this.$store.state.data;
            console.log(this.$store.state.data);
        },
        
        methods:{
            customCompFunc(params){

                console.log(params);

                if (params.type === 'delete'){ // do delete operation

					if(confirm('确认删除?'))
					{
						//this.$delete(this.tableData,params.index);
                        this.$delete(this.$store.state.data,params.index);

					}
					
                    
                }else if (params.type === 'edit'){ // do edit operation

                    //alert(`行号：${params.index} 姓名：${params.rowData['route']}`);
					//Bus.$emit("msg","test message");
					//这个可用
                    //bus.$emit('edit',params);
                    $stroe.state.index=params.index;
					
                }

            },
			handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
				done();
			})
				.catch(_ => {});
			},
			addPath(){
				
				bus.$emit('add','');
			}
			
        }
    }

    // 自定义列组件
    Vue.component('table-operation',{
        template:`<span>
		
        <a href="" @click.stop.prevent="update(rowData,index)">编辑</a>&nbsp;
		
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">删除</a>
        </span>`,
        props:{
            rowData:{
                type:Object
            },
            field:{
                type:String
            },
            index:{
                type:Number
            }
        },
        methods:{
            update(){

               // 参数根据业务场景随意构造
               let params = {type:'edit',index:this.index,rowData:this.rowData};
               this.$emit('on-custom-comp',params);
            },

            deleteRow(){

                // 参数根据业务场景随意构造
                let params = {type:'delete',index:this.index};
                this.$emit('on-custom-comp',params);

            }
			
        }
    })
	/*
	Vue.component('table-dialog',{
	template:`<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>`,
methods:{
			
        }
	})
	*/

</script>


