<script setup>
import { computed} from 'vue';
import { destinations } from '../assets/data.json';

const props = defineProps({
  experienceSlug: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});

function getExperience(){
  let destination=destinations.find((destination)=>destination.id==parseInt(props.id))
  return destination.experiences.find((experience)=>experience.slug==props.experienceSlug)

}

const experience = computed(()=>getExperience()) //aquest era l'error. computed no espera el resultat d'una funcio , sino una funcio en si.

</script>

<template>
  <div class="experience-details">
    <h3>{{ experience.name }}</h3>
  <img :src="`/images/${experience.image}`" :alt="experience.name">
  <p>{{ experience.description }}</p>
  </div>
  
</template>
