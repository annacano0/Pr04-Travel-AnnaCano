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

  <div class="experiences">
    <h2>Top experiencies in {{ destination.name }}</h2>
    <div class="cards">
      <article class="card" v-for="experience in destination.experiences" :key="experience.slug">
        <img :src="'../../public/images/' + experience.image" :alt="experience.image" />
        <p class="card__text">{{ experience.name }}</p>
      </article>
    </div>
  </div>
</template>
