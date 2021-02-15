import Vue from 'vue'
import VueRouter from 'vue-router'
import OurGames from '@/views/OurGames.vue'
import NavigationBar from '@/views/NavigationBar.vue'
import SignUp from '@/components/SignUp.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import MemoryCard from '@/views/MemoryCard.vue'
import TicTac from '@/views/TicTac.vue'

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
    path: '/memory-card',
    name: 'MemoryCard',
    component: MemoryCard
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
//NAVIGATION GUARD
router.beforeEach((to, from, next) => {
  if (to.matched.some(routes => routes.meta.requiresAuth)) {
    if (localStorage.getItem('auth') === 'magic@yahoo.se') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
  next()
})

export default router
