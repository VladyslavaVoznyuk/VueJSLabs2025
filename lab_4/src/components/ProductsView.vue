
<script setup>
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'


const productsStore = useProductsStore()
const cart = useCartStore()
const products = productsStore.products


function addToCart(p) { cart.add({ id: p.id, title: p.title, price: p.price, qty: 1 }) }
</script>

<template>
  <div>
    <h2>{{ $t('app.title') }}</h2>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{ p.title }} — {{ p.price }}$
        <button @click="addToCart(p)">{{ $t('buttons.add') }}</button>
      </li>
    </ul>
  </div>
</template>

