<template>
  <main id="landingPage">
    <div class="input-wrap">
      <a-input v-model:value="inputName" placeholder="Name" />
      <a-button
        @click="onClickedPlayBtn"
        :loading="isWaitingToJoin"
        class="play-btn"
        type="primary"
      >
        Play →</a-button
      >
      <label>{{ currentParticipants }} / {{ maxParticipants }}</label>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { userStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const { name, setName } = userStore()
const inputName = ref<string>(name)
const currentParticipants = ref<number>(12)
const maxParticipants = ref<number>(25)
const isWaitingToJoin = ref<boolean>(false)
const router = useRouter()

const onClickedPlayBtn = async () => {
  setName(inputName.value)
  isWaitingToJoin.value = true
  await setTimeout(function () {
    isWaitingToJoin.value = false
    router.push('/central-plaza-morning')
  }, 1500)
}
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
