<template>
  <section class="favorites">
    <h2>Избранное</h2>
    <ul class="favorites-list">
      <li v-for="item in favorites" :key="item.id" class="favorite-item">
        <img :src="`http://localhost:1452/image/${item.image}`" alt="image" class="favorite-item-image" />
        <div class="favorite-item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} ₽</p>
        </div>
        <button @click="toggleFavorite(item)" class="btn btn-unfavorite">
          Убрать из избранного
        </button>
      </li>
    </ul>
    <p v-if="favorites.length === 0" class="empty-message">Нет избранных товаров</p>
  </section>
</template>

<script setup>
import { useProductStore } from '../stores/useProductStore'
import { computed } from 'vue'

const store = useProductStore()
const favorites = computed(() => store.favorites)
const toggleFavorite = (product) => store.toggleFavorite(product)
</script>

<style scoped>
.favorites {
  padding: 2rem;
}

.favorites-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.favorite-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

.favorite-item-image {
  max-width: 80px;
  height: auto;
  margin-right: 1rem;
}

.favorite-item-info {
  flex-grow: 1;
  text-align: left;
}

.btn-unfavorite {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>