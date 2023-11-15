<template>
  <footer
    class="md:pb-4 px-6 py-4 bg-gray-400/5 md:rounded-full border-t md:border dark:border-gray-800 flex justify-between items-center"
  >
    <div>Published under MIT License.</div>
    <div class="flex items-center">
      <UButton
        to="https://x.com/Atinux"
        target="_blank"
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/atinux/nuxt-guestbook"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </div>
  </footer>
</template>
