<script setup>
import { computed} from 'vue';
import { destinations } from '../assets/data.json';


const props = defineProps({
  experienceSlug: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  }
});

console.log("experience slug:", props.experienceSlug, "id:", props.destinationId);

const destination = computed(() => {
  return destinations.find(destination => destination.id === props.destinationId);
});

const experience = computed(()=>{
  return destination.value?.experiences.find((experience)=>experience.slug===props.experienceSlug)
})

</script>

<template>
<p>{{ experience?.description }}</p>
</template>
