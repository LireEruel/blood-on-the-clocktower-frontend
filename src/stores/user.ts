import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    name: localStorage.getItem('name') || ''
  }),
  actions: {
    setName(newInfo) {
      this.name = newInfo
      localStorage.setItem('name', newInfo)
    }
  }
})
