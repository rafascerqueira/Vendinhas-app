import axios from "axios";
import { getToken } from "../helpers/auth";

// const URL = "https://vendinhas.herokuapp.com/";
const URL = "http://localhost:3001";

const api = axios.create({
  baseURL: URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
