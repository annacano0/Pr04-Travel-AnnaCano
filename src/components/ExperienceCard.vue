<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  destinationName: {
    type: String,
    required: true,
  },
  destinationId:{
    type:Number,
    required:true
  }
});
</script>

<template>
  <div v-if="experiences.length" class="experiences">
    <h3>Experiences in {{ destinationName }}</h3>
    <div class="cards">
      <router-link :to="{name:'experience.show', params:{experienceSlug:experience.slug}}"   
        class="card"
        v-for="experience in experiences"
        :key="experience.slug">
        <img
          :src="'/images/' + experience.image"
          :alt="experience.name"
        />
        <span class="card__text">{{ experience.name }}</span>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>No experiences available.</p>
  </div>
</template>
