<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { destinations } from '../assets/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';

const route = useRoute();
const router = useRouter();
const id = ref(parseInt(route.params.id));

const destination = ref(destinations.find((destination) => destination.id === id.value));

watch(
  () => route.params.id,
  (newId) => {
    id.value = parseInt(newId);
  }
);

const goBack = () => {
  router.back();
};
</script>

<template>
  <div v-if="destination">
    <h2>{{ destination.name }}</h2>
    <button @click="goBack">Go back</button>
    <div class="destination-details">
      <img :src="'/images/' + destination.image" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
    <ExperienceCard 
      :experiences="destination.experiences" 
      :destinationName="destination.name" 
      :destinationId="destination.id"
    />
    <router-view/>
  </div>
  <div v-else>
    <p>Loading destination...</p>
  </div>
</template>
