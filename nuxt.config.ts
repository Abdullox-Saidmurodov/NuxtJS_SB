// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: false },
 modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
 pinia: { storesDirs: ['./store/**'] },
 compatibilityDate: '2025-02-10',
})