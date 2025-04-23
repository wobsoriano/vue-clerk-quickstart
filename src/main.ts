import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { clerkPlugin } from '@clerk/vue'
import router from './router'

const app = createApp(App)

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

app.use(clerkPlugin, {
  routerPush: router.push,
  routerReplace: router.replace,
  publishableKey: PUBLISHABLE_KEY,
  signInFallbackRedirectUrl: '/dashboard',
  signUpFallbackRedirectUrl: '/dashboard',
  afterSignOutUrl: '/sign-in'
})
app.use(router)

app.mount('#app')
