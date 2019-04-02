<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img src="../../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="col1">
          恭喜35期学员平均月薪资 2万
          <a @click.prevent="logout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧栏 -->
      <el-aside width="200px">
        <el-menu
        :router="true"
          default-active="2-2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- 第一个 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">用户列表</el-menu-item>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
             <el-menu-item index="roles">校色列表</el-menu-item> <el-menu-item index="rights">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主题内容部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        // 点击确定按钮
        .then(() => {
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!',
            duration: 800
          })
        })
        // 点击取消按钮
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
            duration: 800
          })
        })
    }
    //  handleOpen(key, keyPath) {
    //   console.log("打开了");
    // },
    // handleClose(key, keyPath) {
    //   console.log("关闭了");
    // }
  }
}
</script>

<style scoped lang='less'>
.el-container {
  height: 100%;
  min-width: 900px;
}
.el-header {
  padding: 0;
  height: 60px;
  background: #b3c1cd;
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
  }

  .col1 {
    padding-right: 50px;
    line-height: 60px;
    text-align: right;
    a {
      text-decoration: none;
      color: #daa520;
    }
  }
}

.el-aside {
  background: #545c64;
}
.el-main {
  background: #eaeef1;
}
</style>
