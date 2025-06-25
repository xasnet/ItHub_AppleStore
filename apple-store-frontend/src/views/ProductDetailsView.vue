<template>
  <section v-if="product" class="product-details">
    <div class="product-container">
      <img :src="`http://localhost:1452/image/${product.image}`" :alt="product.name" class="product-image" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p><strong>Цена:</strong> {{ product.price }} ₽</p>

      <button @click="addToCart" class="btn btn-cart">
        {{ isAddedToCart ? 'В корзине' : 'Добавить в корзину' }}
      </button>
      <button @click="toggleFavorite" class="btn btn-favorite">
        {{ isFavorite ? 'Убрать из избранного' : 'Добавить в избранное' }}
      </button>
    </div>
  </section>

  <section v-else class="not-found">
    <h2>Товар не найден</h2>
    <router-link to="/">← Вернуться на главную</router-link>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/useProductStore'

const route = useRoute()
const store = useProductStore()
const product = ref(null)

onMounted(async () => {
  product.value = await store.getProductById(parseInt(route.params.id))
})

const isAddedToCart = computed(() => {
  return store.cart.some(item => item.id === product.value?.id)
})

const isFavorite = computed(() => {
  return store.favorites.some(p => p.id === product.value?.id)
})

function addToCart() {
  store.addToCart({ ...product.value })
}

function toggleFavorite() {
  store.toggleFavorite({ ...product.value })
}
</script>

<style scoped>
.product-details {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.btn {
  margin-right: 10px;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}

.btn-cart {
  background-color: #0071e3;
}
.btn-cart:hover {
  background-color: #005bb5;
}

.btn-favorite {
  background-color: #ff9500;
}
</style>