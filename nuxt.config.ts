// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  srcDir: 'src',

  typescript: {
    shim: false,
    strict: true,
  },

  css: ['~/assets/css/reset.css'],

  runtimeConfig: {
    resasApiKey: process.env.RESAS_API_KEY,
    public: {
      apiBase: process.env.API_BASE_URL || 'https://opendata.resas-portal.go.jp/api/v1',
    },
  },
})
