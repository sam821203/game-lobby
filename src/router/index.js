import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    }
  ]
})

export default router
