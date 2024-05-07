// Wrapper for HTTP requests with Axios
import axios from 'axios';

const api = axios.create({
   baseURL: 'https://chatbe-f5ee.onrender.com/',
});

// Add an interceptor for all requests
api.interceptors.request.use(config => {
   // Retrieve the access token from React state or a state management system
   const accessToken = sessionStorage.getItem("access_token");

   // Add the access token to the Authorization header
   config.headers.Authorization = `Bearer ${accessToken}`;

   return config;
});

export default api;