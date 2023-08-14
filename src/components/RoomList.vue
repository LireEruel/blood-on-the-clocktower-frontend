<template>
  <div class="roomList">
    <div v-for="(room, index) in roomList" :key="index" class="room">{{ room }}</div>
  </div>
</template>

<script lang="ts" setup>
const roomList = [
  '창고',
  '교실',
  '분수대',
  '마법관',
  '별빛 관찰대',
  '시계탑 중층',
  '시장 뒷골목',
  '고블린의 동굴',
  '도서관',
  '연구실',
  '사무실',
  '왕실 정원',
  '대성당',
  '박물관',
  '오페라 하우스',
  '지하실',
  '해변가',
  '고요한 호수',
  '수련의 숲',
  '폐가',
  '산 정상',
  '시계탑 상층',
  '마법사의 방',
  '용의 동굴'
]
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
.roomList {
  background-color: $perple-03;
  color: $white;
  width: 25rem;
  height: 100%;
  overflow-y: auto;
  font-size: 1.3rem;
  .room {
    cursor: pointer;
    padding: 1rem;
  }
  .room:hover {
    background-color: $perple-07;
    transition: all 0.3s;
  }
}
</style>
