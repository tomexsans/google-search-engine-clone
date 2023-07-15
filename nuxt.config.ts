// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components:true,
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
