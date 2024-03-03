<template>
    <guest-layout>
        <template #header>
            <Header/>
        </template>
        <template #default>
            SERVICES PAGES
        </template>
        <template #footer>
            THIS IS AWESOME FOOTER
        </template>
    </guest-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/Header.vue';
import  GuestLayout from '@/layout/GuestLayout.vue';

    
</script>