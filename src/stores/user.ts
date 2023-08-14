import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    name: localStorage.getItem('name') || ''
  }),
  actions: {
    setName(newName:string) {
      this.name = newName
      localStorage.setItem('name', newName)
    }
  }
})
