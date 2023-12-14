import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    "@/assets/styles.scss",
    "primeicons/primeicons.css",
    "primevue/resources/themes/saga-blue/theme.css"

  ],
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['Button', 'DataTable', 'MultiSelect', 'RadioButton', 'Calendar', 'Column', 'InputText', 'Toast', 'Password', 'Checkbox']
    },
    directives: {
      include: ['Tooltip', 'Ripple']
    },
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false
  },
})