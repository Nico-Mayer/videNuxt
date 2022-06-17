import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  unocss: {},
  css: ["@unocss/reset/tailwind.css", "/app.css"],
})