import axios from 'axios';

const baseURL = import.meta.env.BACKEND_URL || 'http://localhost:5000/api'
const api = axios.create({
    baseURL // Replace with your backend base URL
});

export default api;