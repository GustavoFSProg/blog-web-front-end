import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-new-api.herokuapp.com/',
  // headers: { origin: "*" },
  
  // baseURL: 'http://localhost:5000/'
})

export default api