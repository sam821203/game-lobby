<template>
  <!-- <div>Loading...</div> -->
  <app-navbar></app-navbar>
  <app-home></app-home>
  <app-footer></app-footer>
  <app-auth></app-auth>
</template>

<script setup>
import AppNavbar from '@/layouts/components/Navbar.vue'
import AppFooter from '@/layouts/components/Footer.vue'
import AppAuth from '@/layouts/Auth.vue'

import AppHome from '@/views/home/Home.vue'
</script>