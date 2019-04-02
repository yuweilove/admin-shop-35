import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '../components/login/Login.vue'
import Home from '../components/home/home.vue'

Vue.use(VueRouter)

// 注册路由
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})

export default router
