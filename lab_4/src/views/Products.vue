
<script setup>
import { useI18n } from 'vue-i18n'
import { useCartStore } from '@/stores/cart'

const { t } = useI18n()
const cart = useCartStore()

const products = [
  { id: 1, title: 'products.chocolateCake', price: 20 },
  { id: 2, title: 'products.vanillaCupcake', price: 5 },
  { id: 3, title: 'products.strawberryTart', price: 8 }
]

function addToCart(product) {
  cart.add({ ...product, qty: 1 })
}
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">{{ t('products.title') }}</h2>

    <div v-for="product in products" :key="product.id" class="flex justify-between items-center border-b py-2">
      <span>{{ t(product.title) }} — {{ product.price }}$</span>
      <button
        @click="addToCart(product)"
        class="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        {{ t('buttons.add') }}
      </button>
    </div>
  </div>
</template>

