<script setup lang="ts">
import { SignedIn, SignedOut, UserButton } from 'vue-clerk'
</script>

<template>
  <header class="header">
    <div>
      <div style="flex-grow: 1;">
        <p class="title">Clerk + Vue + Vue Router App</p>
      </div>
      <SignedIn>
        <UserButton after-sign-out-url="/sign-in" />
      </SignedIn>
      <SignedOut>
        <RouterLink to="/sign-in">Sign In</RouterLink>
      </SignedOut>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
