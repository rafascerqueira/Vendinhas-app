import api from "../config/api";

const getOrderId = async (customerId) => {
  let id = await api
    .post("/order", { id: customerId })
    .then((order) => order.data.id);
  return id;
};

export const setPurchaseOrder = async (customerId, order) => {
  const orderId = await getOrderId(customerId);
  order.map(async (product) => {
    let { id, qty } = product;

    let payload = {
      orderId: parseInt(orderId),
      productId: parseInt(id),
      quantity: parseInt(qty),
    };

    await api
      .post("/sale", payload)
      .then((sale) => sale.data)
      .catch((err) => console.log(err));

    return window.location.reload();
  });
};

/**
 * show order list chosing `true` to get orders when complete cicle,
 * `false` to pending order cicle
 * @param {boolean} status
 */
export const showSelectedOrder = async (status) =>
  await api.post("/order/list", { status }).then((req) => req.data);
