import { useNuxtApp } from 'nuxt/app';
import { ofetch } from 'ofetch';
import { defineStore } from 'pinia';
import { ToastServiceMethods } from 'primevue/toastservice';


export const useDataStore = defineStore({
    id: 'dataStore',
    state: () => ({
        data: []
    }),
    actions: {
        async fetchData() {
            const nuxtApp = useNuxtApp();
            const $toast = nuxtApp.$toast as ToastServiceMethods;
            await ofetch('http://127.0.0.1:5000/mock', { timeout: 3000 })
                .then(data => {
                    this.data = data;
                })
                .catch(error => {
                    const errorMessage = error.data ? JSON.stringify(error.data) : "Server responded with an error";
                    $toast.add({ severity: 'error', summary: 'Error', detail: errorMessage, life: 3000 });
                });
        }
    }
});
