<template>
           <h1>All Products</h1>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.title }}</li>
        </ul>

        <RouterLink :to="{name:'login'}">LOGIN</RouterLink>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {getAllProducts} from "@/api/product";
import { type Product } from '@/models/ProductModel';
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