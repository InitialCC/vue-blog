import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['@/views/Login.vue'], resolve)
const NotFound = resolve => require(['@/views/404.vue'], resolve)
const Home = resolve => require(['@/views/Home.vue'], resolve)

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '*', redirect: '/404',
      component: NotFound,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    localStorage.removeItem('user')
  }
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next();
  }
})
export default router


// const Login = resolve => require(['@/pages/Login.vue'], resolve)



