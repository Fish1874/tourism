import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // redirect: '/login' 路由重定向，每次访问 /  则重定向到/login页
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 意思是每次进入初始化页面，X轴为0 Y轴也为0
    return {x: 0, y: 0}
  }
})

// 挂载路由守卫
// router.beforeEach((to, from, next) => {
//   // to表示将要访问的路径， from 从哪个路径来， next 表示放行
//   if (to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) {
//     return next('/login')
//   }
//   next()
// })

export default router
