<template>
    <div >
        <v-pageTitle vtitle="path"></v-pageTitle>


       
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    查询
                    <hr>
                    <pathForm></pathForm>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <el-card class="box-card card-a">
                    路径
                    <hr>
                    <pathTable></pathTable>
                </el-card>
            </el-col>
             
        </el-row>

		<el-row>
            <el-col :span="24">
                <el-card class="box-card card-a">
                    增删
                    <hr>
                    <editDialog></editDialog>
                </el-card>
            </el-col>
             
        </el-row>
        


    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import inlineForm from '../forms/inlineForm.vue';
	import pathTable from '../manage/pathTable.vue';
	import editDialog from '../manage/editDialog.vue'
	import pathForm from '../manage/pathForm.vue';
   
    export default {
        components:{
            vPageTitle,pathTable,editDialog,pathForm
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .box-card{
        font-size:12px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
        margin-top:6px;
    }
    .card-a{
        
    }
   
    
 
    
</style>