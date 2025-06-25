import { defineStore } from 'pinia'
import api from '../services/apiService'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    cart: [],
    favorites: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const res = await api.getProducts()
        // Добавляем категорию вручную
        this.products = res.data.map(product => ({
          ...product,
          category: product.name.toLowerCase().includes('iphone') ? 'iphone' :
                    product.name.toLowerCase().includes('ipad') ? 'ipad' :
                    product.name.toLowerCase().includes('mac') ? 'mac' : 'other'
        }))
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    addToCart(product) {
      this.cart.push({ ...product })
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(p => p.id !== productId)
    },
    toggleFavorite(product) {
      const exists = this.favorites.some(p => p.id === product.id)
      if (exists) {
        this.favorites = this.favorites.filter(p => p.id !== product.id)
      } else {
        this.favorites.push({ ...product })
      }
    }
  },
  getters: {
    filteredProducts(state) {
      return [...state.products].sort((a, b) => a.price - b.price)
    }
  }
})