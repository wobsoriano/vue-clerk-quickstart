<script setup lang="ts">
import { useUser } from '@clerk/vue'

const { isLoaded, user } = useUser()
</script>

<template>
  <div v-if="!isLoaded" class="flex h-screen w-full items-center justify-center p-4">
    <div class="size-10 rounded-full border-4 border-gray-200 border-t-foreground animate-spin" />
  </div>
  <RouterView v-else />
</template>
