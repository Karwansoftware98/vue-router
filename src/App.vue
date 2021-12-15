
<template>
  <div class="space-x-2 flex">
    <NavigationComp />
  </div>
 


  <router-view v-slot="{Component}">
  <transition name="slide" mode="out-in">
    <component :is="Component" :key="$route.path"></component>
  </transition>
  </router-view>
</template>


<script setup>
import NavigationComp from './components/NavigationComp.vue'


</script>
