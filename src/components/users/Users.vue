<template>
 <div>
    <el-table :data="usersList" style="width: 100%">
    <el-table-column prop="username" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
    <el-table-column prop="mobile" label="电话"></el-table-column>

    <el-table-column label="用户状态"></el-table-column>
    <el-table-column label="操作"></el-table-column>
  </el-table>

  <el-pagination background layout="prev, pager, next" :total="total" :current-page='pagenum' :page-size='2'></el-pagination>
 </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data() {
    return {
      usersList: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      // 总个数
      total: 0,
      // 当前页
      pagenum: 1
    }
  },
  created() {
    this.loadUsersList()
  },
  methods: {
    loadUsersList() {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            query: '',
            pagenum: 1,
            pagesize: 2
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          console.log(res)
          this.usersList = res.data.data.users
          this.total = res.data.data.total
          this.pagenum = res.data.data.pagenum;
        })
    }
  }
}
</script>

<style>
</style>
