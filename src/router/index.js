import Vue from 'vue'
import VueRouter from 'vue-router'
import OurGames from '@/views/OurGames.vue'
import NavigationBar from '@/views/NavigationBar.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
