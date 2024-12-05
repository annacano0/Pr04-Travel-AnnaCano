<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { destinations } from '../assets/data.json'
</script>

<template>
  <nav id="nav">
    <h1><RouterLink to="/">Home</RouterLink></h1>

    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { slug: destination.slug, id: destination.id } }"
    >
      {{ destination.name }}
    </router-link>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style></style>
