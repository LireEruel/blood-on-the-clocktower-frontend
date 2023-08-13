<template>
  <main id="landingPage">
    <div class="input-wrap">
      <a-input v-model:value="name" placeholder="Name" />
      <a-button class="play-btn" type="primary"> Play →</a-button>
      <label>{{ currentParticipants }} / {{ maxParticipants }}</label>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref<string>('')
const currentParticipants = ref<number>(12)
const maxParticipants = ref<number>(25)
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
#landingPage {
  background-image: url('@/assets/img/backgrounds/login.png');
  background-size: cover; /* 이미지가 요소를 완전히 덮도록 설정 */
  background-position: center; /* 이미지 위치를 중앙으로 설정 */
  width: 100%;
  height: 100%;
  padding-top: 35%;
  .input-wrap {
    width: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    .play-btn {
      width: 100%;
    }
    label {
      color: $white;
    }
  }
}
</style>
