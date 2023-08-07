<template>
  <main class='home'>
    <app-announcement />
    <app-middle-bar />
    <div class='lobby-wrap'>
      <div class="aside">
        <div class="aside-items">
          <img src="" alt="">
          <span></span>
        </div>
      </div>
      <div class="content">
        <div class="hot">
          <div class="title">熱門</div>
          <div class="hot-page">

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppAnnouncement from '@/views/home/components/Announcement.vue'
import AppMiddleBar from '@/views/home/components/MiddleBar.vue'
</script>
