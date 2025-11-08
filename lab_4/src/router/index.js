import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'
import Products from '@/views/Products.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', component: Profile },
  { path: '/products', component: Products },
  { path: '/cart', component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
