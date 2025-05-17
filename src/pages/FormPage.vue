<template>
  <div class="form-page">
    <h1>Форма отправки</h1>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Имя:</label>
        <input 
          type="text" 
          id="name" 
          v-model="formData.name" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          v-model="formData.email" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="message">Сообщение:</label>
        <textarea 
          id="message" 
          v-model="formData.message" 
          required
        ></textarea>
      </div>
      
      <button type="submit" :disabled="loading">
        {{ loading ? 'Отправка...' : 'Отправить' }}
      </button>
      <button type="button" @click="resetForm" class="reset-btn">
        Сбросить
      </button>
    </form>
    
    <div v-if="response" class="response">
      <h3>Ответ сервера:</h3>
      <pre>{{ response }}</pre>
    </div>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { useFormStore } from '../stores/formStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useFormStore()
    const { formData, response, error, loading } = storeToRefs(store)
    const { submitForm, resetForm } = store

    const handleSubmit = () => {
      submitForm()
    }

    return { formData, response, error, loading, handleSubmit, resetForm }
  }
}
</script>

<style scoped>
.form-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #F6F3D9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
  resize: vertical;
}

button {
  padding: 10px 15px;
  background-color: #5F33F5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color:rgb(76, 36, 207);
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.reset-btn {
  background-color: #BA090D;
}

.reset-btn:hover {
  background-color:rgb(162, 22, 22);
}

.response {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.error {
  margin-top: 20px;
  padding: 15px;
  background-color: #ffebee;
  color: #BA090D;
  border-radius: 4px;
}
</style>