import api from "../config/api";

export const getBilling = () => api.get("/billing").then((req) => req.data);
