import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//导入页面组件
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
      },{
        path:'message',
        name: 'message',
        component: ()=>import('../views/message/Message.vue')
      },
      {
        path:'undetail',
        name: 'Undetail',
        component: ()=>import('../views/message/Undetail.vue')
      },
      {
        path:'oldyuyue',
        name: 'Oldyuyue',
        component: ()=>import('../views/old/Oldyuyue.vue')
      },
      {
        path:'yuyue',
        name: 'Yuyue',
        component: ()=>import('../views/Yuyue/Yuyue.vue')
      },
      {
          path: 'doctor',
          component: () =>
              import ('../views/doctor/doctor.vue')
      },
      {
        path:'personalCenter',
        name: 'personalCenter',
        component: ()=>import('../views/PersonalCenter/PersonalCenter.vue')
      },
      {
        path:'forgetPwd',
        name: 'forgetPwd',
        component: ()=>import('../views/forgetPwd/forgetPwd.vue')
      },
      {
        path:'information',
        component: ()=>import('../views/information/information.vue')
      },
      {
        path:'homepage',
        name:'homepage',
        component:()=>import('../views/homepage/homepage.vue')
      },
      {
        path:'pagehome',
        component:()=>import('../views/section/pagehome.vue')
      },
      {
        path:'/clction',
        component:()=>import('../views/section/clction.vue')
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