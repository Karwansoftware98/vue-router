<template>
  <div>
  <a v-if="isExternal" :href="props.to"><slot /></a>
    <router-link v-else v-bind="$props"><slot/></router-link>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { RouterLink } from "vue-router";

  const props =defineProps({
    ...RouterLink.props
  })

    const isExternal = computed(()=>{
      return typeof props.to === 'string' && props.to.startsWith('http')

    })

</script>


<style lang="scss" scoped></style>