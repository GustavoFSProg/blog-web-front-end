import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-new-api.herokuapp.com/'  
  // baseURL: 'http://localhost:5000/'
})

export default api