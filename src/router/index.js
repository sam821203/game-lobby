import { createRouter, createWebHistory } from 'vue-router'
import layout from "@/layouts/appDefault.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: layout,
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
