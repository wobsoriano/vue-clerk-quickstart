<script setup lang="ts">
import { useUser } from '@clerk/vue'
const { user } = useUser()
</script>

<template>
    <section class="grid gap-2 p-2">
    <p>Hi {{ user?.firstName || user?.emailAddresses[0].emailAddress || 'there' }}!</p>
    <p>You are currently on the dashboard route.</p>
    </section>
</template>
