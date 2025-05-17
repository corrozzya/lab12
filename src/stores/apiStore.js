import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useApiStore = defineStore('api', () => {
  const apiData = ref(null)
  const formData = ref({
    firstName: '',
    lastName: ''
  })
  const loading = ref(false)
  const error = ref(null)

  const fetchApiData = async () => {
    loading.value = true
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      apiData.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const submitForm = async () => {
    loading.value = true
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: formData.value.firstName,
        body: formData.value.lastName,
        userId: 1
      })
      return response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { apiData, formData, loading, error, fetchApiData, submitForm }
})
