
<script setup>
import { useI18n } from 'vue-i18n'
import { useCartStore } from '@/stores/cart'

const { t } = useI18n()
const cart = useCartStore()
</script>

<template>
  <div class="max-w-xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">{{ t('cart.title') }}</h2>

    <div v-if="cart.items.length">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center border-b py-2"
      >
        <span>
          {{ t(item.title) }} — {{ item.price }}$ × {{ item.qty }}
        </span>
        <button
          @click="cart.remove(item.id)"
          class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          {{ t('buttons.remove') }}
        </button>
      </div>

      <div class="mt-4 font-semibold">
        {{ t('cart.total') }}: {{ cart.totalPrice }}$ ({{ cart.totalCount }} {{ t('cart.items') }})
      </div>

      <button
        @click="cart.clear"
        class="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
      >
        {{ t('buttons.clear') }}
      </button>
    </div>

    <div v-else class="text-gray-600">
      {{ t('cart.empty') || 'Cart is empty' }}
    </div>
  </div>
</template>

