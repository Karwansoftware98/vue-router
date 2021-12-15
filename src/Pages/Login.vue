<template>
    <main class="grid place-items-center ">
        <section class="bg-white p-8 rounded-lg max-w-xl mx-auto ">
        <h1 class="text-3xl">Login</h1>
        <form @submit.prevent="login"  class=" mt-8 border border-gray-300 p-8 rounded-lg">
           

            <div class="mb-6">
            <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray700">
            Email
            </label>

            <input type="email" 
            class="border border-gray-400 p-2 w-full rounded-xl"
            name="email"
            id="email"
            v-model="email"
            >
       
            </div>
             <div class="mb-6">
            <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray700">
            Password
            </label>

            <input type="password" 
            class="border border-gray-400 p-2 w-full rounded-xl"
            name="password"
            id="password"
            v-model="password"
            >
  

            </div>
            <div class="mb-6 flex justify-end">
                <button type="submit" class="bg-blue-400 text-white rounded-xl py-2 px-4 hover:bg-blue-500" >Login</button>
            </div>
        </form>
  </section>
  </main>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRoute, useRouter } from 'vue-router';

      const email = ref('')
      const password = ref('')
      const route =useRoute()
      const router = useRouter()

      const login = () =>{
           window.user = email.value
            const redirect = route.query.redirect || '/protected'
            router.push(redirect)
      }
   
</script>

