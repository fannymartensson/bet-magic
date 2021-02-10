import Vue from 'vue'
import VueRouter from 'vue-router'
import OurGames from '@/views/OurGames.vue'
import NavigationBar from '@/views/NavigationBar.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NavigationBar',
    component: NavigationBar
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }

]

const router = new VueRouter({
  routes
})

export default router
