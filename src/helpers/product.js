import api from "../config/api";

export const getAllProducts = () =>
  api.get("/product").then((list) => list.data);

export const getOneProduct = (id, arr) => {
  const indx = parseInt(id);
  return arr.filter((prod) => prod.id === indx);
};

export const setProduct = (payload) => {
  api
    .post("/product", payload)
    .then((prod) => prod.data)
    .catch((error) => console.error(error));
  return window.location.reload();
};

export const dotToComma = (price) => price.replace(".", ",");

export const commaToDot = (price) => price.replace(",", ".");
