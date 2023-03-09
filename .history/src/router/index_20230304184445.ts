import { createRouter, createWebHistory } from 'vue-router'
import registerView from '../views/re'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
  ]
})

export default router
