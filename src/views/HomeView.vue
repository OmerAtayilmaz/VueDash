<template>

    <UserLayout>
           <h1>All Products</h1>
       

        <RouterLink :to="{name:'login'}">LOGIN</RouterLink>
    </UserLayout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {getAllProducts} from "@/api/product";
import { type Product } from '@/models/ProductModel';
import UserLayout from '@/layout/UserLayout.vue';

export default defineComponent({
    name: 'Products',
    setup() {
        const products = ref<Product[]>([]);

        onMounted(async () => {
            try {
                products.value = await getAllProducts();
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        });

        return {
            products
        };
    }
});
</script>