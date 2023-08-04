<template>
  <div class="wrap">
    <app-navbar></app-navbar>
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import AppNavbar from './components/navbar.vue'
</script>

<style lang="scss" scoped>

</style>