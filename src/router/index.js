import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import NavigationBar from '@/views/NavigationBar.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
