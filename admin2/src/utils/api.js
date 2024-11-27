// src/api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // URL cơ bản của backend Laravel

// Hàm GET với đường dẫn động
export const getApi = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
    throw error;
  }
};
