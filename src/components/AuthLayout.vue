<script setup lang="ts">
import { useClerk } from '@clerk/vue'

const clerk = useClerk()

const handleLogout = () => {
  clerk.value?.signOut()
}
</script>

<template>
  <div class="p-2 h-full">
    <h1>Authenticated Route</h1>
    <p>This route's content is only visible to authenticated users.</p>
    <ul class="py-2 flex gap-2">
      <li>
        <RouterLink
          to="/dashboard"
          class="hover:underline data-[status='active']:font-semibold"
        >
          Dashboard
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/dashboard/invoices" class="hover:underline data-[status='active']:font-semibold">
          Invoices
        </RouterLink>
      </li>
      <li>
        <button @click="handleLogout" type="button" class="hover:underline">Logout</button>
      </li>
    </ul>
    <hr />
    <RouterView />
  </div>
</template>
