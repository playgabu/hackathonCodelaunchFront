import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create(
    {
        baseUrl: "https://inruivy4ji.execute-api.us-east-1.amazonaws.com/dev/"
    }
)

axiosInstance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  // console.log("🚀 ~ file: axiosInstance.jsx:11 ~ axiosInstance.interceptors.request.use ~ token:", token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
},
(error) => {
  Promise.reject(error);
});

export default axiosInstance;