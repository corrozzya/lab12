import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useFormStore = defineStore('form', () => {
  const formData = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const response = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const submitForm = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: formData.value.name,
        body: formData.value.message,
        userId: 1,
        email: formData.value.email
      })
      response.value = res.data
    } catch (err) {
      error.value = 'Ошибка при отправке формы: ' + err.message
    } finally {
      loading.value = false
    }
  }

  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
    response.value = null
    error.value = null
  }

  return { formData, response, error, loading, submitForm, resetForm }
})