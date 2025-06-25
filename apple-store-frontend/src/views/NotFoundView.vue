<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Страница не найдена</h2>
    <p>Извините, такой страницы не существует.</p>
    <router-link to="/" class="home-link">← Вернуться на главную</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.not-found {
  text-align: center;
  padding: 60px 20px;
  color: #333;
}
.home-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0071e3;
  color: white !important;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}
.home-link:hover {
  background-color: #005bb5;
}
</style>