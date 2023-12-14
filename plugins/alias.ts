
import { defineNuxtPlugin } from 'nuxt/app';
import { useToast } from 'primevue/usetoast';

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            toast: useToast()
        }
    }
})
