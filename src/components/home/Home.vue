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
        <el-col :span="8">
          恭喜35期学员平均月薪资 2万
          <a href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
.el-container {
  height: 100%;
  min-width: 900px;
}
.el-header {
  padding: 0;
  height: 60px;
  background: #b3c1cd;
}
h1 {
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 28px;
}
a {
  text-decoration: none;
  color: #daa520;
}
.el-row .el-col:nth-child(3) {
  padding-right: 50px;
  line-height: 60px;
  text-align: right;
}
.el-aside {
  background: #545c64;
}
.el-main {
  background: #eaeef1;
}
</style>
