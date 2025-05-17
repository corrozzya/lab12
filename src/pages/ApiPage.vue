<template>
  <div class="api-page">
    <h1>Данные из API</h1>
    <button @click="fetchPosts">Загрузить</button>
    
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const posts = ref([])
    const loading = ref(false)
    const error = ref(null)

    const fetchPosts = async () => {
      loading.value = true
      error.value = null
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        posts.value = response.data
      } catch (err) {
        error.value = 'Ошибка при загрузке данных: ' + err.message
      } finally {
        loading.value = false
      }
    }

    return { posts, loading, error, fetchPosts }
  }
}
</script>

<style scoped>
.api-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #F6F3D9;
}

.post {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  background-color: #5F33F5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:hover {
  background-color:rgb(77, 38, 206);
}
</style>
