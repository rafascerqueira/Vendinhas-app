import api from "../config/api";
const TOKEN_KEY = "__token";

const hasToken = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

const isAuth = token => {
  let data = api.post("/validate", { token }).then(resp => resp.data);
  return data;
};

export const validation = () => {
  if (!hasToken) return false;

  let token = getToken();

  return isAuth(token);
};
