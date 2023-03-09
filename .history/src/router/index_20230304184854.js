import { createRouter, createWebHistory } from 'vue-router'
import registerView from '../views/registerView'
import loginView from '../views/loginView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'reg',
      component: registerView
    },
    {
      path: '/login',
      name: 'log',
      component: loginView
    },
    
  ]
})

export default router
