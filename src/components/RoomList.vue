<template>
  <div class="roomList">
    <div
      v-for="room in chatRoomInfoList"
      :key="room.chatRoomId"
      class="room"
      @click="() => onClickRoom(room)"
    >
      {{ room.chatRoomName }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { chatRoomInfoList } from '@/assets/chatRooms'
import { type ChatRoomInfo } from '@/types/chat'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

const onClickRoom = (room: ChatRoomInfo) => {
  Swal.fire({
    title: room.chatRoomName + '으로 이동할까요?',
    showCancelButton: true,
    heightAuto: false
  }).then((result) => {
    if (result.isConfirmed) {
      router.push('/chat-room')
    }
  })
}
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
