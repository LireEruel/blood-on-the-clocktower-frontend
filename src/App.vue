<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view class="view header" name="header" />
  <div class="contents">
    <router-view class="view body" name="body" />
  </div>
  <router-view class="view fotter" name="footer" />
</template>
