import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home//首页
  },
  {
    path: '/about',//about页面
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // {
  //   path:'/home',
  //   redirect:'/'  //重定向只对首页和公共路由有效，访问/和访问home都可以访问首页页面
  // },

  {
    path:'*',//404错误页面
    component:() => import('../views/err.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  

  console.log(to);
  console.log(from);
  next()//不调用next（）,路由的信息就不会显示
})
export default router
