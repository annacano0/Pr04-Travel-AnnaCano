<script setup>
import { destinations } from '../assets/data.json'
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div class="destinations">
       <article  v-for="destination in destinations" :v-key="destination.id">
      <h3>
        {{ destination.name }}
      </h3>
      <img :src="'../../public/images/' + destination.image" :alt="destination.name" />
    </article>
    </div>
    
  </div>
   

</template>
