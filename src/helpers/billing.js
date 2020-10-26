import api from "../config/api";

export const getBilling = () => api.get("/billing").then((req) => req.data);

/**
 * show paid out when choose `true` and `false` to unpaid bills
 * @param {boolean} invoiced
 */
export const showSelectedBill = (invoiced) =>
  api.post("/billing/bills", { invoiced }).then((req) => req.data);
