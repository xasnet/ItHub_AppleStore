<template>
  <header class="header">
    <Logo />
    <h1>Apple Store</h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/category/iphone">iPhone</router-link>
      <router-link to="/category/ipad">iPad</router-link>
      <router-link to="/category/mac">Mac</router-link>
      <router-link to="/cart">Корзина</router-link>
      <router-link to="/favorites">Избранное</router-link>
    </nav>
  </header>
</template>

<script setup>
import Logo from '../ui/Logo.vue'
</script>

<style scoped>
.header {
  background-color: #f8f8f8;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.header h1 {
  margin: 0;
  font-size: 1.5rem;
}

.header nav a {
  margin-left: 1rem;
  text-decoration: none;
  color: #0071e3;
}

.header nav a:hover {
  text-decoration: underline;
}
</style>