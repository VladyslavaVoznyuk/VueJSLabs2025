import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // { id, title, price, qty }
  }),
  getters: {
    totalCount: (state) => state.items.reduce((s, it) => s + (it.qty || 0), 0),
    totalPrice: (state) => state.items.reduce((s, it) => s + (it.price * (it.qty || 0)), 0)
  },
  actions: {
    add(item) {
      // item: { id, title, price, qty }
      const found = this.items.find(i => i.id === item.id)
      if (found) {
        found.qty = (found.qty || 0) + (item.qty || 1)
      } else {
        this.items.push({ ...item, qty: item.qty ?? 1 })
      }
    },
    remove(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    clear() {
      this.items = []
    }
  },
  persist: {
    key: 'myapp_cart',
    paths: ['items']
  }
})
