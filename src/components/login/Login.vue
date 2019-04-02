<template>
<el-row type='flex' justify='center' align='middle' class="row1">
  <el-col :span='8' class="col1">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
    <el-form-item label="登录" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>

    <el-form-item label="活动名称" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="startLogin()">登录</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
  </el-col>
  </el-row>

</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    startLogin() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          return
        }
        axios
          .post('http://localhost:8888/api/private/v1/login', this.ruleForm)
          .then(res => {
            console.log(res)
            if (res.data.meta.status === 200) {
              this.$message({
                message:res.data.meta.msg,
                type: 'success',
                duration:800
              })
              this.$router.push('/home')
            }else{
                this.$message({
                message:res.data.meta.msg,
                type: 'error',
                duration: 800
              })
            }
          })
      })
    },
    resetForm() {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  html,body,#app{
    height: 100%;
  }
  .row1 {
    height: 100%;
    background-color: #2d434c;
  }
  .col1{
    background-color: #fff;
    padding: 10px 25px;
    border-radius: 15px;
  }


</style>
