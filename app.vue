<script setup>
import { SEO } from "~/constants/index";
useSeoMeta(SEO);
</script>

<template>
  <main class="container mx-auto">
    <Header />
    <UContainer>
      <NuxtPage />
    </UContainer>
    <Footer />
    <UNotifications />
  </main>
</template>
