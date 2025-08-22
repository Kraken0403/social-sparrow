// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  // Ensure your global CSS includes the Tailwind entry
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/global.css', 
  ],

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
