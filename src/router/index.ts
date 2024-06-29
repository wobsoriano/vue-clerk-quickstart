import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../components/DashboardLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/DashboardView.vue')
        },
        {
          path: 'invoices',
          component: () => import('../views/DashboardInvoicesView.vue')
        }
      ]
    },
    {
      path: '/sign-in',
      component: () => import('../views/SignInView.vue')
    },
    {
      path: '/sign-up',
      component: () => import('../views/SignUpView.vue')
    }
  ]
})

export default router
