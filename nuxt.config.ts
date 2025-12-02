export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
})
