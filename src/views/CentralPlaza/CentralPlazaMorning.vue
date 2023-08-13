<template>
  <main id="centralPlazaMorning">
    <TimerLabel :end-time="endTime.toISOString()" />
  </main>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
const endTime = dayjs().add(10, 'minute')
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
#centralPlazaMorning {
  background-image: url('@/assets/img/backgrounds/centralPlazaMorning.png');
  background-size: cover; /* 이미지가 요소를 완전히 덮도록 설정 */
  background-position: center; /* 이미지 위치를 중앙으로 설정 */
  width: 100%;
  height: 100%;
  padding: 5%;
}
</style>
