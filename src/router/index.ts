import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import DashboardSkeleton from '../components/DashboardSkeleton.vue'
import DashboardView from '../views/DashboardView.vue'
import DashboardInvoicesView from '../views/DashboardInvoicesView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/contact',
      component: ContactView
    },
    {
      path: '/dashboard',
      component: DashboardSkeleton,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: 'invoices',
          component: DashboardInvoicesView
        }
      ]
    },
    {
      path: '/sign-in',
      component: SignInView
    },
    {
      path: '/sign-up',
      component: SignUpView
    }
  ]
})

export default router
