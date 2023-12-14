import { useFetch } from "nuxt/app";
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        counter: 0,
        text: '',
        date: '',
        products: [{
            "id": "1000",
            "code": "f230",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "price": 65,
            "category": "Accessories",
            "quantity": 24,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        }]
    }),
    getters: {
        items: (state): number => state.counter * 2
    },
    actions: {
        async addItem(name: string) {
            const { data }: any = await useFetch("http://127.0.0.1:8080/hello", {
                method: "GET",
                mode: "no-cors"
            });
            this.$state.text = data.value
        },
        async refresh(name: string) {
            const { data }: any = await useFetch("http://127.0.0.1:8080/list", {
                method: "GET",
                mode: "no-cors"
            });
            this.$state.text = ""
        }
    }
})