import { Chat } from '@/types/chat'
import { defineStore } from 'pinia'

export const chatStore = defineStore('chat', {
  state: () => ({
    chatList: [] as Chat[]
  }),
  actions: {
    addChat(newChat: Chat) {
      this.chatList.push(newChat)
    }
  }
})
