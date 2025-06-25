<template>
  <section class="cart">
    <h2>Корзина</h2>
    <ul class="cart-list">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="`http://localhost:1452/image/${item.image}`" alt="image" class="cart-item-image" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} ₽</p>
        </div>
        <button @click="removeFromCart(item.id)" class="btn btn-remove">Удалить</button>
      </li>
    </ul>
    <p v-if="cart.length === 0" class="empty-message">Корзина пуста</p>
  </section>
</template>

<script setup>
import { useProductStore } from '../stores/useProductStore'
import { computed } from 'vue'

const store = useProductStore()
const cart = computed(() => store.cart)
const removeFromCart = (id) => store.removeFromCart(id)
</script>

<style scoped>
.cart {
  padding: 2rem;
}

.cart-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}

.cart-item-image {
  max-width: 80px;
  height: auto;
  margin-right: 1rem;
}

.cart-item-info {
  flex-grow: 1;
  text-align: left;
}

.btn-remove {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>