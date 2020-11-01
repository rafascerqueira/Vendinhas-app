import api from "../config/api";

export const getBilling = () => api.get("/billing").then((req) => req.data);

/**
 * show paid out when choose `true` and `false` to unpaid bills
 * @param {boolean} invoiced
 */
export const showSelectedBill = (invoiced) =>
  api.post("/billing/bills", { invoiced }).then((req) => req.data);

/**
 * Create a new Bill, and close the order in progress
 * @param {string|number} id - Order id
 */
export const setNewBill = async (id) => {
  await api.post("/billing", { id });
  await api.put("/order", { id, status: true });
  return window.location.reload();
};

/**
 * change `invoiced` status to paid (`true`)
 * @param {string|number} id - id for Invoice
 */
export const payingBill = (id) => {
  const payload = {
    id,
    invoiced: true,
  };
  api.put("/billing", payload);
  return window.location.reload();
};

export const hidePendingBill = (id) => {
  document.getElementById(`${id}`).style.display = "none";
};
