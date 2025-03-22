// api.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://192.168.0.100:8282/api/v1",
});

// Add a request interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default api;