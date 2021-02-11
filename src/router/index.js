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
    component: ProfilePage
  }
]
const router = new VueRouter({
  routes
})

export default router
