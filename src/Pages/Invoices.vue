<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from "vue-router";

    onBeforeRouteLeave((to,from) =>{
          const answer = window.confirm(
            'are you sure'
          )
          if(!answer) return false
    })
</script>

<style lang="scss" scoped></style>