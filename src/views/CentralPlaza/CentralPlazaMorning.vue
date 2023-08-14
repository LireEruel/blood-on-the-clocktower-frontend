<template>
  <main id="centralPlazaMorning">
    <div class="col-wrap">
      <TimerLabel :end-time="endTime.toISOString()" />
      <div class="hori-wrap">
        <ChatArea />
        <RoomList />
      </div>
    </div>
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

  .col-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hori-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
