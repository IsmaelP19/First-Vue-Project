<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="home">
    <h1>This is the home page!</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 70vh;
    display: flex;
    align-items: center;
  }
}
</style>
