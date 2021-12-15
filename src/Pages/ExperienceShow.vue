<template>
  <div class="mt-6 border-2 border-blue-400 p-4 rounded-lg space-y-4 mr-2">
    <img :src="`/images/${experience.image}`" :alt="experience.name" class="rounded-lg w-full" >
    <p class="font-bold ">{{ experience.description }}</p>
  </div>
</template>

<script>
import Data from '../data.json'
export default {
  props:{
    id: {type:Number, required: true},
    experienceSlug:{type:String, required: true,}
  },
   computed:{
       destination(){
         return Data.destinations.find(
           destination => destination.id === this.id
         )
       },
       experience(){
         return this.destination.experiences.find(
           experience => experience.slug === this.experienceSlug
         )
       }
      },
}
</script>
