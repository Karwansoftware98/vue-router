<template>
  <div class="mx-auto max-w-lg">
    <h1>Hello, {{ email }}</h1>
    <router-link :to="{name:'invoices'}">Invoices</router-link>
    <button @click="logout">  Logout</button>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

  const router = useRouter()
  const email = ref(window.user)
  function  logout(){
        window.user = null 
        router.push({name:'Home'})
      }
</script>

<style lang="scss" scoped></style>