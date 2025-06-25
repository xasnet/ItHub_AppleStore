<template>
    <section class="category">
      <h2>Категория: {{ categoryName }}</h2>
  
      <div v-if="loading">Загрузка товаров...</div>
      <div v-else-if="products.length === 0">Нет товаров в этой категории</div>
      <div class="product-list">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useProductStore } from '@/stores/useProductStore'
  import ProductCard from '@/components/ui/ProductCard.vue'
  
  const route = useRoute()
  const store = useProductStore()
  const categoryName = ref('')
  const loading = ref(true)
  
  // Фильтрация по категории из URL (например, /category/iphone)
  onMounted(async () => {
    loading.value = true
    await store.fetchProducts()
  
    categoryName.value = route.params.id.charAt(0).toUpperCase() + route.params.id.slice(1)
    loading.value = false
  })
  
  const products = computed(() => {
    return store.products.filter(p => p.category === route.params.id)
  })
  </script>
  
  <style scoped>
  .category {
    padding: 2rem;
  }
  
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  </style>