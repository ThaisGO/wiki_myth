// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  nitro: {
    preset: 'vercel'
  },
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss'
  ],css: [
    '~/assets/css/main.css'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})