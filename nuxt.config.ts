// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-aos'],
  css: [
    '@/assets/css/main.css'
  ],
  googleFonts: {
    families: {
      'Montserrat': '200..700'
    }
  }
})