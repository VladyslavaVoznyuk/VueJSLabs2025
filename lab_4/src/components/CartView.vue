
<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'


const cart = useCartStore()
const { items, totalPrice, totalCount } = storeToRefs(cart)


function remove(id) { cart.remove(id) }
function clear() { cart.clear() }
</script>

<template>
  <div>
    <h2>{{ $t('cart.title') }}</h2>
    <div v-if="items.length === 0">{{ $t('cart.empty') }}</div>
    <ul v-else>
      <li v-for="it in items" :key="it.id">
        {{ it.title }} — {{ it.price }}$ × {{ it.qty }}
        <button @click="remove(it.id)">{{ $t('buttons.remove') }}</button>
      </li>
    </ul>


    <div v-if="items.length">
      <p>Total: {{ totalPrice }}$ ({{ totalCount }} items)</p>
      <button @click="clear()">{{ $t('buttons.clear') }}</button>
    </div>
  </div>
</template>

