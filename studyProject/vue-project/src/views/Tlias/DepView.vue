<script>
import axios from 'axios'
export default {
    data(){
      return{
        tableData:[]
      }
    },
    methods: {
    onSubmit() {
      alert('提交成功');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
  mounted() {
    axios.get("https://yapi.pro/mock/450515/userGetByID").then((result)=>{
      this.tabledata=result.data.data
    })
  }
}
</script>

<template>
  <div>
    <el-container style="height:500px;border:1px solid #eee">
<!--     标题-->
      <el-header style="font-size: 40px; background-color: rgb(238, 241, 246);font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif; ">
          Tlias智能学习辅助系统
      </el-header>


<!--      内容-->
      <el-container>
<!--        侧边栏-->
        <el-aside width="230px" style="height:600px;border:1px solid" >
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">部门管理</el-menu-item>
                <el-menu-item index="1-2">员工管理</el-menu-item>
              </el-menu-item-group>
              </el-submenu>
          </el-menu>
        </el-aside>

<!--        主体-->
          <el-main>
            <!--        表格-->
            <el-table :data="tableData">
              <el-table-column prop="name" label="名称" width="140"></el-table-column>
              <el-table-column prop="lastOperationTime" label="最后操作时间" width="120"></el-table-column>
              <el-table-column prop="option" label="操作">
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger"  size="mini">删除</el-button>
              </el-table-column>
            </el-table>

            <!--            分页条-->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              background
              layout="sizes,prev, pager, next,jumper,total"
              :total="1000">
            </el-pagination>
          </el-main>
        </el-container>

    </el-container>
  </div>
</template>

<style scoped>

</style>