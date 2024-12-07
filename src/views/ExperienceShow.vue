<script setup>
import {ref} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const experienceSlug = ref(parseInt(route.params.experienceSlug));
</script>

<template>
  <h2>Experience {{experienceSlug}}</h2>
</template>
