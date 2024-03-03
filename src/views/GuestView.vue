<template>
    <guest-layout>
        <template #header>
            <Header/>
        </template>
        <template #default>
            DEFAULT CONTENT
        </template>
        <template #footer>
            <Footer/>
        </template>
    </guest-layout>
</template>
<script lang="ts" setup>
import Header from '@/components/Header.vue';
import  GuestLayout from '@/layout/GuestLayout.vue';
import Footer from '@/components/Footer.vue';
    
</script>