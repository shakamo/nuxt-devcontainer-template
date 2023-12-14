<script setup  lang="ts">
import { computed, watch, ref } from 'vue';
import AppTopbar from '@/components/AppTopbar.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useLayout } from '@/composables/layout';

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref<any>(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-theme-light': !layoutConfig.darkTheme.value,
        'layout-theme-dark': layoutConfig.darkTheme.value,
        'layout-overlay': layoutConfig.menuMode.value === 'overlay',
        'layout-static': layoutConfig.menuMode.value === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive.value,
        'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        'p-input-filled': layoutConfig.inputStyle.value === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event: UIEvent) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event: UIEvent) => {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');
    if (event.target) {
        const target = event.target as Node;

        return !(sidebarEl?.isSameNode(target) || sidebarEl?.contains(target) || topbarEl?.isSameNode(target) || topbarEl?.contains(target));
    }
    return false;
};

</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <AppTopbar />
        <div class="layout-sidebar">
            <AppSidebar />
        </div>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <AppFooter />
        </div>
        <div class="layout-mask"></div>

        <Toast />
    </div>
</template>

<style lang="scss"></style>
