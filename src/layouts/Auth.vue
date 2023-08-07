<template>
  <div class='auth-wrap'>
    <div class="navbar">navbar</div>
    <div class="main">
      <ul class="tab-wrap">
        <li :class="['link-item']">Login</li>
        <li :class="['link-item']">Register</li>
      </ul>

      <!-- 判斷為 login 或者 register -->
      <app-login />
      <app-register />

      <div class="login-wrap"></div>
      <div class="socials">Socials</div>
    </div>
  </div>
</template>

<script setup>
import AppLogin from "@/views/auth/Login.vue";
import AppRegister from "@/views/auth/Register.vue";

</script>

<style lang="scss" scoped>

</style>