<script setup lang="ts">
import { watchEffect } from 'vue'
import { useAuth } from 'vue-clerk'
import { useRouter } from 'vue-router'
const router = useRouter()

const { userId, isLoaded } = useAuth()

watchEffect(() => {
  if (isLoaded.value && !userId.value) {
    router.push('/sign-in')
  }
})
</script>

<template>
  <div v-if="!isLoaded">Loading...</div>
  <RouterView v-else />
</template>
