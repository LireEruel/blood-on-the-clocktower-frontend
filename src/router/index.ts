import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import CentralPlazaMorning from '../views/CentralPlaza/CentralPlazaMorning.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        body: LandingView
      }
    },
    {
      path: '/central-plaza-morning',
      name: 'centralPlazaMorning',
      components: {
        body: CentralPlazaMorning
      }
    }
  ]
})

export default router
