import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default {
  getProducts() {
    return apiClient.get('/products/')
  },
  getProductById(id) {
    return apiClient.get(`/products/${id}`)
  },
  getProductsBySubcategory(subcategoryId) {
    return apiClient.get(`/subcategory/${subcategoryId}`)
  },
  getCategorySubcategories(categoryId) {
    return apiClient.get(`/subcategory?category=${categoryId}`)
  }
}