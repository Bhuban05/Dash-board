import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axiosInstance from './Components/Intercepter/axiosInstance.jsx';
 // Import Axios with Interceptors

// Ensure Axios is initialized before rendering
console.log("Axios Interceptors Initialized:", axiosInstance);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
