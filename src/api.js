import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-new-api.herokuapp.com/'
})

export default api