<script setup>
import {ref, watch} from 'vue'
import { useRoute } from 'vue-router';
import {destinations} from '../assets/data.json';

const route = useRoute();
const experienceSlug = ref(route.params.experienceSlug);
const destinationId = route.params.destinationId

const experience=()=>{
  let destination = destinations.filter((destination)=> destination.id==destinationId)
  return destination.filter((experience)=>experience.slug=experienceSlug)
}


watch(
  () => route.params.experienceSlug,
  (newSlug) => {
    experienceSlug.value = newSlug;
  }
)

</script>

<template>
  <h2>Experience {{experienceSlug}}</h2>
  <p>{{experience.slug}}</p>
</template>
