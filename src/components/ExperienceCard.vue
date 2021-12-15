<template>
    
    <div class="mt-4 mb-4">
        <img :src="`/images/${experience.image}`" :alt="experience.name" class="rounded-lg mgn">

        <span>
        {{ experience.name }}
        </span>
    </div>
</template>

<script setup>

defineProps({
    experience:{type:Object , required:true}
})

</script>

<style lang="css">

  
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