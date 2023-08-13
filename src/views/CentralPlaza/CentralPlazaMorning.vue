<template>
  <main id="centralPlazaMorning">
    <div class="input-wrap">{{ name }}</div>
    <div>중앙 광장</div>
  </main>
</template>

<script lang="ts" setup>
import { userStore } from '@/stores/user'
const { name, setName } = userStore()
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
#centralPlazaMorning {
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
