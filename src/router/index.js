import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home'
Vue.use(VueRouter)

const routers = [
  {
    path:'/',
    redirent:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/mine',
    name:'mine',
    component:()=>import ('@views/Mine')
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routers
})

export default router
