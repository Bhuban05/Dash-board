import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://192.168.0.109:8282/api/v1", 
  headers: {
    "Content-Type": "application/json",
  },                
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); 
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized! Attempting token refresh...");

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          const refreshResponse = await axios.post("https://your-api.com/refresh", {
            token: refreshToken,
          });

          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem("access_token", newAccessToken);

        
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(error.config);
        }
      } catch (refreshError) {
        console.error("Refresh token failed. Redirecting to login...");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login"; 
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

