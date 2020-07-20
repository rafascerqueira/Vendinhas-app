import api from "../config/api";

export const getAllProducts = () =>
  api.get("/product").then((list) => list.data);

export const getOneProduct = (id, arr) => {
  const indx = parseInt(id);
  return arr.filter((prod) => prod.id === indx);
};
