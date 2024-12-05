<script setup>
import { useRoute } from 'vue-router'

import { destinations } from '../assets/data.json'

const route = useRoute()
const id = parseInt(route.params.id)
const destination = destinations.find((destination) => destination.id === id)
</script>

<template>
  <h2>{{ destination.name }}</h2>
  <button>Go back</button>
  <div>
    <img src="" alt="" />
    <p>{{ destination.description }}</p>
  </div>

  <div>
    <h2>Top experiencies in {{ destination.name }}</h2>
    <article v-for="experience in destination.experiences" :key="experience.slug">
      <img :src="'../../public/images/' + experience.image" :alt="experience.image" />
      <p>{{ experience.name }}</p>
    </article>
  </div>
</template>
