import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import layout from '../views/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,//首页
        meta: {
          title: '首页'
        }
      },
      {
        path: 'details',//about页面
        name: 'Details',
        component: () => import('../views/details/Details.vue'),
        meta: {
          title: '详情页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登录页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  // let user = localStorage.getItem('user')
  // if (to.path === '/login') next()
  // else user ? next() : next('/login')

  // console.log(to);
  // console.log(from);
  // next()//不调用next（）,路由的信息就不会显示
})
export default router
