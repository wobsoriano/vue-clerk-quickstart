import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuth } from '@clerk/vue'
import { watch, type Ref } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/dashboard',
      component: () => import('../components/AuthLayout.vue'),
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

router.beforeEach(async (to, from, next) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded.value) {
    await waitForClerkJsLoaded(isLoaded);
  }
  console.log('to', to)

  if (['/dashboard', '/invoices'].includes(to.path) && !isSignedIn.value) {
    return next({ path: '/sign-in' })
  }

  if (to.path === '/sign-in' && isSignedIn.value) {
    return next({ path: '/dashboard' })
  }

  next()
})

/**
 * The vue router navigation guard runs immediately on page load
 * so we need to wait for Clerk.js to load before we can check
 * if the user is signed in.
 */
async function waitForClerkJsLoaded(isLoaded: Ref<boolean>) {
  return new Promise<void>(resolve => {
    const unwatch = watch(isLoaded, value => {
      if (value) {
        resolve();
      }
    });
  });
}

export default router
