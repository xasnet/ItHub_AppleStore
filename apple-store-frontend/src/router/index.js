import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import CategoryView from '../views/CategoryView.vue' // ✅ Добавлено
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/favorites', name: 'Favorites', component: FavoritesView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetailsView },
  { path: '/category/:id', name: 'Category', component: CategoryView }, // ✅ Добавлено
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router