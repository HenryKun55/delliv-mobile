import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from '.';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
  },
});

api.interceptors.request.use(async (config) => {
  if (config.headers) {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
