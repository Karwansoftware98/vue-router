
<template>
<div class="max-w-sm md:max-w-lg lg:max-w-4xl   mx-auto mt-14 mb-4">
  <h1>All Destination</h1>

    <div class="grid lg:grid-cols-2 grid-cols-1 mt-4 gap-4 border-2 border-green-300 p-8 rounded-lg">
    
  <router-link
    v-for="destination in destinations"
    :key="destination.id"
    :to="{name:'destination.show', params:{id:destination.id, slug:destination.slug}}"
  >

    <h2 class="mb-2">{{ destination.name }}</h2>
    <img :src="`/images/${destination.image}`" :alt="destination.name" class="rounded-lg"/>
  </router-link>
    </div>
    
</div>
</template>


<script setup>
  import {reactive} from "@vue/reactivity";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

 
    import sourceData from "../data.json";
    const  destinations = reactive(sourceData.destinations);



    onBeforeRouteLeave((to,from) =>{
          const answer = window.confirm(
            'are you sure'
          )
          if(!answer) return false
    })


    

</script>

