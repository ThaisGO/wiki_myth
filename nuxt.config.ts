// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  ssr: true,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: [
        '/',
        '/guia-do-jogo/diferenca',
        '/guia-do-jogo/warp',
        '/guia-do-jogo/metricas',
        '/class-build/sinx'
      ]
    }
  },
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss'
  ],css: [
    '~/assets/css/main.css'
  ],
})