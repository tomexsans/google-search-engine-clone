// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components:true,
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
