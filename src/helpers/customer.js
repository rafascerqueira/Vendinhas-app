import api from "../config/api";

export const getAllNames = () => api.get("/customer").then((list) => list.data);

export const setNewCustomer = async (customer) =>
  api.post("/customer", customer);
