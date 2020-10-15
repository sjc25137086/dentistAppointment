import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
      path:'helloworld',
      name: 'helloworld',
      component: ()=>import('../components/HelloWorld.vue')
      },
      {
        path:'personalCenter',
        name: 'personalCenter',
        component: ()=>import('../views/PersonalCenter/PersonalCenter.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

//防止同路径跳转报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

export default router
