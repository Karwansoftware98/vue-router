<template>
 <div class="flex space-x-2 w-full bg-gradient-to-r from-blue-500  via-pink-500 to-green-400  p-6  justify-between ">
  <img src="/images/brazil.jpg" alt="" width="30" height="30"  class="mg">
  <div class="flex justify-center space-x-4">
  
  <router-link to="/">Home</router-link>

  <AppLink
    v-for="destination in destinations"
    :key="destination.id"
    :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}"
  >
  {{ destination.name }}
  </AppLink>
  <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
  <AppLink to="https://vueschool.io">Vue School</AppLink>
  <router-link to="/kawa">kawa</router-link>


  </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import Data from '../data.json'
import AppLink from './AppLink.vue';


  const destinations = ref(Data.destinations)
 
  

</script>

<style lang="css">

  .active{
    font:bold;
    border-bottom:2px solid blue;
  }
    .mg{
      clip-path: polygon(50% 0%,0% 50%,50% 100%,100% 50%);
      animation: fancy 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    @keyframes fancy {
      from{
      clip-path: polygon(50% 0%,0% 50%,50% 100%,100% 50%);

      }
      to{
      clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 100%);

      }
    }

  
</style>

    