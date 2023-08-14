<template>
  <header id="defaultHeader">
    <div class="header-content">
      <label>{{ name }}</label>
      <div class="icon-button">
        <book-two-tone />
      </div>
    </div>
    <div class="header-content">
      <div class="icon-button">
        <img src="@/assets/img/icons/user.svg" alt="participants info icon" />
      </div>
      <div class="icon-button">
        <setting-two-tone />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { userStore } from '@/stores/user'
import { BookTwoTone, SettingTwoTone } from '@ant-design/icons-vue'
const { name } = userStore()
</script>

<style lang="scss">
@import '@/assets/styles/iconButton.scss';

#defaultHeader {
  position: fixed;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1% 5%;
  font-size: 2rem;

  .header-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
