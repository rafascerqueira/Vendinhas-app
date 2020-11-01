import api from "../config/api";

/**
 * Delete from order list a data which order are not done.
 * @param {string|number} id - Order id.
 *
 */
export const deleteOrder = async (id) => {
  // Disclaimer: Axios need to set `data` options to destroy data.
  const payload = { data: { id } };
  await api.delete("/order", payload);
  return window.location.reload();
};
