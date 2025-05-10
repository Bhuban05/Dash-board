import axios from "axios";
import API_ENDPOINTS from "../Auth/Services/apiService";

const BASE_URL = import.meta.env.VITE_BASE_URL
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const Signin = (userData) => API.post(API_ENDPOINTS.SIGNIN, userData);
export const Signup = (formDataa) =>
  API.post(API_ENDPOINTS.SIGNUP, formDataa, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const forget = () => API.post(API_ENDPOINTS.FORGET);
export const otpcode = (formData) => API.post(API_ENDPOINTS.OTP, formData);

export const resetPassword = () => API.post(API_ENDPOINTS.RESETPASSWORD);

export const college = (formData) => API.get(API_ENDPOINTS.COLLEGE, formData);
export const district = () => API.get(API_ENDPOINTS.DISTRICTS);
export const provinces = () => API.get(API_ENDPOINTS.PROVINCES);
export const municipality = () => API.get(API_ENDPOINTS.MUNICIPALIATY);
export const ward = () => API.get(API_ENDPOINTS.WARD);

export default API;

