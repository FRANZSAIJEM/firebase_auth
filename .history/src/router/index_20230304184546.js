import { createRouter, createWebHistory } from 'vue-router'
import registerView from '../views/registerView'
import registerView from '../views/registerView'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reg',
      component: registerView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
  ]
})

export default router
