<template>
  <div class="product-card">
    <img :src="`http://localhost:1452/image/${product.image}`" alt="image" />
    <h3>{{ product.name }}</h3>
    <p>Цена: {{ product.price }} ₽</p>
    <button @click="handleAddToCart">Добавить в корзину</button>
    <button @click="handleToggleFavorite">
      {{ isFavorite ? 'Убрать из избранного' : 'Добавить в избранное' }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useProductStore } from '../../stores/useProductStore'
import { computed } from 'vue'

const props = defineProps(['product'])
const store = useProductStore()

const isFavorite = computed(() => {
  return store.favorites.some(p => p.id === props.product.id)
})

function handleAddToCart() {
  store.addToCart(props.product)
}

function handleToggleFavorite() {
  store.toggleFavorite(props.product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-card button {
  margin: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.product-card button:first-child {
  background-color: #0071e3;
  color: white;
}

.product-card button:last-child {
  background-color: #ff9500;
  color: white;
}
</style>