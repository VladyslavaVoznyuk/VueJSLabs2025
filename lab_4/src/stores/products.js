import { defineStore } from 'pinia'


export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 'p1', title: 'Chocolate Cake', price: 20 },
      { id: 'p2', title: 'Vanilla Cupcake', price: 5 },
      { id: 'p3', title: 'Strawberry Tart', price: 8 }
    ]
  }),
  actions: {
    getById(id) { return this.products.find(p => p.id === id) }
  }
})