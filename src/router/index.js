import Vue from 'vue'
import VueRouter from 'vue-router'
import OurGames from '@/views/OurGames.vue'
import NavigationBar from '@/views/NavigationBar.vue'
import SignUp from '@/components/SignUp.vue'
import LoginPage from '@/views/LoginPage.vue'
import TicTac from '@/views/TicTac.vue'
import ProfilePage from '@/components/ProfilePage.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'NavigationBar',
    component: NavigationBar
  },
  {
    path: '/our-games',
    name: 'OurGames',
    component: OurGames
  },
  {
    path: '/tictac',
    name: 'TicTac',
    component: TicTac
  },
  {
    path: '*',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: {
      requiresAuth: true
    }
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (localStorage.getItem('auth') === 'magic@yahoo.se') {
      next()
    } else {
      next({ path: '*' })
    }
  }
  next()
})

export default router
