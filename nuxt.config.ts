export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: { enabled: true },
})
