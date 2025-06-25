<template>
  <section class="home">
    <input v-model="searchQuery" placeholder="Поиск товаров..." class="search-input" />
    <div class="product-list">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '../stores/useProductStore'
import ProductCard from '../components/ui/ProductCard.vue'

const store = useProductStore()
const searchQuery = ref('')

onMounted(async () => {
  await store.fetchProducts()
})

const filteredProducts = computed(() => {
  let result = [...store.products]
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => p.name.toLowerCase().includes(query))
  }
  return result
})

function addToCart(product) {
  store.addToCart(product)
}

function toggleFavorite(product) {
  store.toggleFavorite(product)
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>