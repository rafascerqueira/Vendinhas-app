import axios from "axios";
import { getToken } from "../helpers/auth";

const api = axios.create({
  baseURL: process.env.BASEURL || "http://localhost:3001"
});

api.interceptors.request.use(
  async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default api;
