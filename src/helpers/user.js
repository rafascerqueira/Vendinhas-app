import api from "../config/api";

export const getUserFromApi = () => {
  const id = localStorage.getItem("__id");
  const dataUser = api
    .get(`/users/${id}`)
    .then((obj) => obj.data)
    .then((data) => data.user);
  return dataUser;
};
