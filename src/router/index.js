import { createRouter, createWebHistory } from 'vue-router'
import registerView from '../views/registerView.vue'
import loginView from '../views/loginView.vue'

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
