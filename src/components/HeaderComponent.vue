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
    <router-link :to="{ name: 'dashboard' }"> <p>Dashboard</p> </router-link>
    <router-link :to="{ name: 'itb' }"> <p>ITB</p> </router-link>
  </nav>
  <div class="container">
    <p></p>
    <RouterView />
  </div>
</template>

<style></style>
