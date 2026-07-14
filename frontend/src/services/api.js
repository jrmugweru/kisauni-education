import axios from "axios";

export default axios.create({
  baseURL: "https://kisauni-education-1.onrender.com/api",
});
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;