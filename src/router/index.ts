import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, ProductsList } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsList,
    },
  ],
})

export default router
