<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Welcome to Vue Router + Vue Clerk</h1>

    <section class="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
      <h2 class="text-xl font-semibold mb-2">About This Template</h2>
      <p class="mb-2">This template demonstrates a SPA architecture using:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Vue Router for routing</li>
        <li>Clerk Vue SDK for authentication</li>
      </ul>
    </section>

    <section class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Navigation</h2>
      <div class="flex gap-4">
        <RouterLink
          to="/sign-in"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/dashboard"
          class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Dashboard (Protected)
        </RouterLink>
      </div>
    </section>
  </div>
</template>
