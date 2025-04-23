export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  build: {
    // postcss: {
    //   postcssOptions: require('./postcss.config.js'),
    // },
  },

  modules: ['@nuxtjs/tailwindcss'],
});