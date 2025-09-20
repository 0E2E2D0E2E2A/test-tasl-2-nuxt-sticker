// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/style/main.scss'],
  runtimeConfig: {
    catApi: process.env.CAT_API // не безопасная штука, лучше указать тут '' и вынести добавление env через pm2 или любой другой менеджер процессов, но для теста пойдет
  }
})
