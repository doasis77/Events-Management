import axios from 'axios';
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";


// Create an Axios instance
const api = axios.create({
  baseURL,
});


export default api;