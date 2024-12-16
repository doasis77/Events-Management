import axios from 'axios';
const baseURL = 'https://events-backend-gumt.onrender.com/api';


// Create an Axios instance
const api = axios.create({
  baseURL,
});


export default api;