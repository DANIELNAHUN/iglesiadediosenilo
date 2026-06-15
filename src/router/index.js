import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/campana',
      name: 'campana',
      // Lazy-loaded: split into a separate chunk
      component: () => import('../views/CampanaView.vue')
    },
    {
      path: '/campana/impresion',
      name: 'campana-print',
      // Lazy-loaded: split into a separate chunk
      component: () => import('../views/CampanaPrintView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
