<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItemType } from '~';


const items: MenuItemType[] = [
    { label: 'Table', icon: 'pi pi-fw pi-table', to: '/examples/table' },
    { label: 'showparts', icon: 'pi pi-fw pi-mobile', to: '/examples/showparts', class: 'rotated-icon' },
    { label: 'Login', icon: 'pi pi-fw pi-mobile', to: '/examples/login', class: 'rotated-icon' },
]

const menu: MenuItemType[] = [
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'メンテナンス',
        items: [{ label: 'メールアドレス一覧', icon: 'pi pi-fw pi-home', to: '/email' }]
    },
    {
        label: 'UI Components',
        items: items
    },
]

const model = ref(menu);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item :item="item" :index="i"></app-menu-item>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
