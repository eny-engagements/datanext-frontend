import axios from "axios";

const API_HOST = import.meta.env.VITE_LOCAL_API_HOST;

const axiosInstance = axios.create({
  baseURL: API_HOST,
});

// Template for interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const credentials = localStorage.getItem("credentials");
    const { authToken, teamId } = credentials ? JSON.parse(credentials) : {};

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
      config.headers["x-team-id"] = teamId;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
