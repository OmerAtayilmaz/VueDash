<template>
    <GuestLayout>

    <div class="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center mb-4">Login</h2>
        <form @submit.prevent="login()">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium">Email</label>
                <input v-model="email" type="text" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-800 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200">
            </div>
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-medium">Password</label>
                <input v-model="password" type="password" id="password" name="password" class="mt-1 block w-full rounded-md border-gray-800 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200">
            </div>
            <div class="text-center">
                <button  type="submit" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Login</button>
            </div>
        </form>
    </div>

    </GuestLayout>
    
</template>
<script setup lang="ts">

import GuestLayout from '@/layout/GuestLayout.vue';
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const email = ref('jonas@gmail.com');
const password = ref('test1234');
const router = useRouter();

async function login(){
    console.log(`${email.value}-${password.value}`);
    try{
        const res = await axios.post("http://localhost/api/v1/user/login",{
            email: email.value,
            password: password.value
        });
        const token = res.data.token;

        localStorage.setItem("token",token);
        console.log("başarıyla giriş yapıldı");
        router.push('/');
       
        

    }catch(err){
        console.error(err);
    }
}
</script>