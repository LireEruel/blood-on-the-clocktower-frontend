<template>
  <div id="timer">
    <div v-if="timeRemaining > 0">
      {{ minutes < 10 ? '0' + minutes : minutes }} : {{ seconds < 10 ? '0' + seconds : seconds }}
    </div>
    <div v-else>00 : 00</div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export default {
  props: {
    endTime: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const endTime = dayjs(props.endTime)
    const timeRemaining = ref(dayjs().diff(endTime, 'second'))
    const days = ref(Math.floor(timeRemaining.value / 86400))
    const hours = ref(Math.floor((timeRemaining.value % 86400) / 3600))
    const minutes = ref(Math.floor((timeRemaining.value % 3600) / 60))
    const seconds = ref(timeRemaining.value % 60)

    const updateTimer = () => {
      timeRemaining.value = endTime.diff(dayjs(), 'second')
      days.value = Math.floor(timeRemaining.value / 86400)
      hours.value = Math.floor((timeRemaining.value % 86400) / 3600)
      minutes.value = Math.floor((timeRemaining.value % 3600) / 60)
      seconds.value = timeRemaining.value % 60
    }

    const timer = setInterval(updateTimer, 1000)

    onMounted(updateTimer)

    onUnmounted(() => {
      clearInterval(timer)
    })

    return { days, hours, minutes, seconds, timeRemaining }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
#timer {
  font-size: 2.5rem;
  background-color: $white-06;
  box-sizing: content-box;
  width: 10rem;
  margin: 1% auto;
  text-align: center;
}
</style>
