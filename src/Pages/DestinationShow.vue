<template>
<div>

        <div v-if="destination" class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4">
        <GoBack />

  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" :src="`/images/${destination.image}`" :alt="destination.name">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{destination.name}}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">{{destination.description}}</p>
    </div>
  </div>
</div>

  <div class="max-w-2xl mx-auto mt-8">
  <h1> Top Experiences in {{ destination.name }}</h1>

    <div class=" flex flex-row  space-x-2">
        <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name:'experience.show', params:{experienceSlug:experience.slug}}"
        >
        <ExperienceCard 
        :experience="experience"
        />
        </router-link>
  </div>
  <router-view />
  </div>
  
</div>
</template>


<script setup>
import sourceData from "../data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

    const props = defineProps({
      id: { type: Number, required: true }
    })


    const route= useRoute()
    const destinationId = computed(()=>{
            return route.params.id

     } )

     
     const dest = ref(sourceData.destinations)

      const destination = computed(()=>{
            return dest.value.find(destination => destination.id === props.id);


     } )
  
  

  
</script>



