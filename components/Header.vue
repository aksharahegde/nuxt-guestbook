<template>
  <header
    class="border-none bg-gray-400/5 md:rounded-full items-center border-b md:border dark:border-gray-800 flex justify-between px-6 py-4"
  >
    <a href="/"> My Testimonials </a>
    <nav class="flex items-center gap-4">
      <ColorMode />
      <UButton v-if="loggedIn" color="gray" @click="clear"> Logout </UButton>
      <UButton
        v-else
        icon="i-simple-icons-github"
        color="gray"
        to="/auth/github"
        external
      >
        Login with GitHub
      </UButton>
    </nav>
  </header>
</template>
<script setup lang="ts">
const { loggedIn, clear } = useUserSession();
</script>
