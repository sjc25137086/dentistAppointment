import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/message/Message.vue'
import Undetail from '../views/message/Undetail.vue'
import Oldyuyue from '../views/old/Oldyuyue.vue'
import Yuyue from '../views/Yuyue/Yuyue.vue'
//导入页面组件
import Header from '../components/MintUI/Header.vue';

Vue.use(VueRouter)

const routes = [
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
