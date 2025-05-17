import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ApiPage from './pages/ApiPage.vue'
import FormPage from './pages/FormPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/api', component: ApiPage },
  { path: '/form', component: FormPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router