import axios from 'axios'

const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

export { axiosBase }
