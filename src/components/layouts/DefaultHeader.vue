<template>
  <header id="defaultHeader">
    <div class="header-left">
      <label>{{ name }}</label>
      <book-two-tone />
    </div>
    <div></div>
  </header>
</template>

<script lang="ts" setup>
import { userStore } from '@/stores/user'
import { BookTwoTone } from '@ant-design/icons-vue'
const { name, setName } = userStore()
</script>

<style lang="scss">
#defaultHeader {
  position: fixed;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  font-size: 2rem;
}
</style>
