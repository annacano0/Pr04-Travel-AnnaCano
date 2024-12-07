<script setup>
defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  destinationName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div v-if="experiences.length" class="experiences">
    <h3>Experiences in {{ destinationName }}</h3>
    <div class="cards">
      <article
        class="card"
        v-for="experience in experiences"
        :key="experience.slug"
      >
        <img
          :src="'/images/' + experience.image"
          :alt="experience.name"
        />
        <span class="card__text">{{ experience.name }}</span>
      </article>
    </div>
  </div>
  <div v-else>
    <p>No experiences available.</p>
  </div>
</template>
