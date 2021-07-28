import api from "../config/api";

const getOrderId = async (customerId) => {
  let id = await api
    .post("/order", { id: customerId })
    .then((order) => order.data.id);
  return id;
};

/** Setting purchase order in database
 *
 * @param {string|number} customerId - Customer id. Normaly loaded with Sale page
 * @param {[object]} order - Order
 */
export const setPurchaseOrder = async (customerId, order) => {
  const orderId = await getOrderId(customerId);

  const total_amount = order
    .map((product) => product.price * product.qty)
    .reduce((total, price) => {
      let result = parseFloat(total) + parseFloat(price);
      return result.toFixed(2);
    });

  order.map(async (product) => {
    let { id, qty } = product;

    let payload = {
      orderId: parseInt(orderId),
      productId: parseInt(id),
      quantity: parseInt(qty),
      total_amount,
    };

    await api
      .post("/sale", payload)
      .then((sale) => sale.data)
      .catch((err) => console.log(err));
  });
  return window.location.reload();
};

/**
 * show order list chosing `true` to get orders when complete cicle,
 * `false` to pending order cicle
 * @param {boolean} status
 */
export const showSelectedOrder = async (status) =>
  await api.post("/order/list", { status }).then((req) => req.data);
