<script setup>
useSeoMeta({
  title: "Nuxt Guestbook",
  description:
    "A Nuxt demo hosted with Edge-side rendering, authentication and queyring a SQLite database",
  ogSiteName: "Nuxt Guestbook",
  ogType: "website",
  ogImage: "https://nuxt-guestbook.pages.dev/social-image.png",
  twitterImage: "https://nuxt-guestbook.pages.dev/social-image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>
