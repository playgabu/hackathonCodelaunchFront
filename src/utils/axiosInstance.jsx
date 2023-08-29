import axios from 'axios';

const axiosInstance = axios.create(
    {
        baseUrl: "https://inruivy4ji.execute-api.us-east-1.amazonaws.com/dev/"
    }
)

axiosInstance.interceptors.request.use(function (config) {
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
});

export default axiosInstance;