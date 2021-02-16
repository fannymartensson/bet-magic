import Vue from 'vue'
import VueRouter from 'vue-router'
import OurGames from '@/views/OurGames.vue'
import NavigationBar from '@/views/NavigationBar.vue'
import SignUp from '@/components/SignUp.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import MemoryCard from '@/views/MemoryCard.vue'
import TicTac from '@/views/TicTac.vue'
import UfoShootingGame from '@/views/UfoShootingGame.vue'
import SnakeGame from '@/views/SnakeGame.vue'
import Game from '../views/Mastermind.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '*',
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
    path: '/ufo-shooting',
    name: 'UfoShootingGame',
    component: UfoShootingGame
  },
  {
    path: '/mastermind',
    name: 'Mastermind',
    component: Game
  },

  {
    path: '/memory-card',
    name: 'Memory',
    component: MemoryCard
  },
  {
    path: '/snakegame',
    name: 'SnakeGame',
    component: SnakeGame
  },
  {
    path: '/login',
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
