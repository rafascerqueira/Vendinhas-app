import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import { getAllNames, setNewCustomer } from "../../helpers/customer";
import {
  getOneProduct,
  getAllProducts,
  currencyFormat,
} from "../../helpers/product";
import { setPurchaseOrder } from "../../helpers/sale";

import {
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

const Sale = () => {
  const [newcus, setNewcus] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState([]);
  const [productList, setProductList] = useState([]);
  const [prodId, setProdId] = useState("");
  const [qty, setQty] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    function fetch() {
      getAllNames().then((obj) => setCustomerList(obj));
      getAllProducts().then((obj) => setProductList(obj));
    }

    fetch();
  }, []);

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

  function storeNewCustomer(event) {
    event.preventDefault();

    try {
      setNewCustomer({ name, email, phone });
      window.location.reload();
    } catch (error) {
      setErr(error);
    }
  }

  return (
    <>
      <Header />
      <Section page="Pedidos" description="registre novos pedidos aqui" />
      <div className="container mx-auto bg-gray-300 rounded-lg p-6 relative">
        <div className="block sm:flex">
          <div className="flex-initial">
            <label htmlFor="new-client">
              <input
                type="checkbox"
                name="new-client"
                id="new-client"
                className=""
                onChange={() => setNewcus(!newcus)}
              />
              <span className="ml-2 font-medium">Novo cliente?</span>
            </label>
          </div>
          <div className="sm:flex-shrink-0 mx-2 my-2 sm:mx-6 sm:my-0">
            <fieldset disabled={newcus ? "disabled" : ""}>
              <select
                name="customer"
                id="customer"
                className="appearance-none w-full py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                defaultValue={"DEFAULT"}
                onChange={(event) => setCustomerId(event.target.value)}
              >
                <option disabled="disabled" value="DEFAULT">
                  Escolha o Cliente
                </option>
                {customerList.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>
          <div
            className={`flex xl:flex-1 justify-center items-center text-xl ${
              newcus ? "hidden" : ""
            }`}
          >
            <span className="">Lançar produtos</span>
          </div>
          <div className={`flex-1 relative ${newcus ? "hidden" : ""}`}>
            <span className="block lg:inline">
              <label htmlFor="code" className="mx-2">
                cód.:
              </label>
              <input
                id="code"
                className="border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                type="text"
                maxLength="10"
                size="10"
                onChange={(e) => setProdId(e.target.value)}
              />
            </span>
            <span className="mr-6">
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
            </span>
            <span className="">
              <button
                type="button"
                className="lg:absolute lg:bottom-0 px-2 py-1 my-1 rounded-lg text-white bg-indigo-600 shadow-lg transition duration-300 ease-in-out hover:bg-indigo-400 hover:shadow-none"
                onClick={(event) => addToOrder(event)}
              >
                Incluir
                <PlusIcon className="inline h-5 w-5 text-white" />
              </button>
            </span>
          </div>
        </div>
        {err && (
          <div className="xl:flex xl:flex-row-reverse">
            <div className="sm:absolute sm:right-0 md:right-20 xl:right-40 my-2 text-center max-w-xs">
              <button
                className="relative bg-red-300 rounded-full pr-2"
                onClick={() => setErr("")}
              >
                <span className="font-medium text-sm ml-6">
                  {err}
                  <XCircleIcon className="absolute bottom-0 h-6 w-6 text-white" />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {newcus && (
          <div className="flex flex-col justify-center items-center my-6">
            <div className="max-w-md w-full space-y-8">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <h1 className="text-center font-semibold text-xl">
                    Cadastrar novo cliente
                  </h1>
                </div>

                <form className="mt-8 space-y-1" onSubmit={storeNewCustomer}>
                  <div>
                    <label htmlFor="fullname" className="sr-only">
                      Nome completo
                    </label>
                    <input
                      id="fullname"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type="text"
                      placeholder="Nome completo"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="email"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Contato
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Contato"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <button
                    className="mt-2 rounded-lg shadow-lg bg-indigo-600 py-2 w-full font-medium text-lg text-white transition duration-300 ease-in-out hover:bg-indigo-400 hover:shadow-none"
                    type="submit"
                  >
                    Salvar
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {!newcus && (
          <div className="flex flex-col justify-center items-center">
            <div className="px-3 py-4 max-w-4xl w-full space-y-8">
              <table className="w-full text-md bg-white shadow-md rounded mb-4">
                <thead>
                  <tr className="border-b-4 border-indigo-400">
                    <th>
                      <abbr title="Código">Cód.</abbr>
                    </th>
                    <th>nome</th>
                    <th>
                      <abbr title="Quantidade">Qtde.</abbr>
                    </th>
                    <th>Preço Un</th>
                    <th>Valor</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tfoot className="sm:text-2xl">
                  <tr>
                    <th
                      colSpan="5"
                      className="text-right py-2 sm:text-center sm:py-4"
                    >
                      TOTAL
                    </th>
                    <th>
                      {currencyFormat(
                        order
                          .map((product) => product.price * product.qty)
                          .reduce((total, price) => {
                            let result = parseFloat(total) + parseFloat(price);
                            return result.toFixed(2);
                          }, "0.00")
                      )}
                    </th>
                  </tr>
                </tfoot>
                <tbody>
                  {order.map((product, key) => (
                    <tr
                      key={key}
                      className="border-b border-indigo-400 text-center"
                    >
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.qty}</td>
                      <td>{currencyFormat(product.price)}</td>
                      <td>
                        {currencyFormat(
                          parseFloat(product.price * product.qty).toFixed(2)
                        )}
                      </td>
                      <td>
                        <div className="">
                          <p className="inline px-1">
                            <Link
                              to="#"
                              className=""
                              onClick={() =>
                                product.qty > 1
                                  ? product.qty--
                                  : order.splice(key, 1)
                              }
                            >
                              <MinusIcon className="inline h-5 w-5 text-gray-900 bg-red-300 rounded-full shadow-lg" />
                            </Link>
                          </p>
                          <p className="inline px-1">
                            <Link
                              to="#"
                              className=""
                              onClick={() => product.qty++}
                            >
                              <PlusIcon className="inline h-5 w-5 text-gray-900 bg-blue-300 rounded-full shadow-lg" />
                            </Link>
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center sm:justify-end">
                <button
                  className="rounded-lg shadow-lg bg-indigo-600 w-60 py-2 font-medium text-lg text-white transition duration-300 ease-in-out hover:bg-indigo-400 hover:shadow-none"
                  onClick={() => setPurchaseOrder(customerId, order)}
                >
                  <span className="">Finalizar</span>
                  <ShoppingCartIcon className="inline h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sale;
