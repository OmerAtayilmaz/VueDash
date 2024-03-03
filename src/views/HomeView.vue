<template>

    <official-layout>
        <template #header>
            <Header />
        </template>
        
           <h1>All Products</h1>
       

        <RouterLink :to="{name:'login'}">LOGIN</RouterLink>
    </official-layout>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {getAllProducts} from "@/api/product";
import { type Product } from '@/models/ProductModel';
import OfficialLayout from '@/layout/OfficialLayout.vue';
import Header from '@/components/Header.vue';
import LoginView from './LoginView.vue';
import GuestLayout from '@/layout/GuestLayout.vue';


        const products = ref<Product[]>([]);
        onMounted(async () => {
            try {
                products.value = await getAllProducts();
            }
            catch (error) {
                console.error('Error fetching products:', error);
            }
        });
 

</script>