import React, { useState } from "react";
import { getOneProduct } from "../../helpers/product";

import { PlusIcon } from "@heroicons/react/solid";

const SectionInsertProduct = () => {
  const [err, setErr] = useState("");
  const [qty, setQty] = useState("");
  const [order, setOrder] = useState([]);
  const [prodId, setProdId] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);

  function addToOrder(event) {
    event.preventDefault();
    let prod = getOneProduct(prodId, productList);
    if (!prod[0]) return setErr("Produto não encontrado");
    if (isNaN(qty)) return setErr("Favor inserir um número válido. (Ex.: 1)");
    prod[0].qty = qty;
    let stuff = order.filter((obj) => obj.id === prod[0].id);
    if (!stuff.length) {
      setOrder((order) => order.concat(prod));
    }
  }

  return (
    <>
      <div className="my-10 bg-gray-200 rounded-md p-6 m-6 sm:px-2 sm:p-10 shadow-md">
        <label className="">Lançar produtos</label>
        <div className="flex px-4">
          <div className="flex-1">
            <label htmlFor="code" className="mx-2">
              cód.:
            </label>
            <input
              id="code"
              className="border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
              type="text"
              maxLength="6"
              size="4"
              onChange={(e) => setProdId(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="count" className="mx-2">
              Qtde.:
            </label>
            <input
              id="count"
              className="border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
              type="text"
              maxLength="2"
              size="2"
              onChange={(e) => setQty(Math.abs(e.target.value))}
            />
          </div>
          <div className="flex-1 relative">
            <button
              type="button"
              className="absolute bottom-0 px-1 py-1 my-1 text-white bg-indigo-600 shadow-lg sm:rounded-r-full transition duration-300 ease-in-out hover:bg-indigo-400 hover:shadow-none"
              onClick={(event) => addToOrder(event)}
            >
              <span>
                Incluir
                <PlusIcon className="inline h-5 w-5 text-white" />
              </span>
            </button>
          </div>
        </div>
        {err && (
          <div className="">
            {err}
            <button className="" onClick={() => setErr("")}></button>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionInsertProduct;
