import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  //   target: 'static',
  nitro: {
    // preset options
    preset: 'browser',
  },
  router: {
    base: '/nuxt3-app-demo/',
  },
})
