import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import {
  PlusIcon,
  XIcon,
  CheckIcon,
  ExclamationIcon,
} from "@heroicons/react/solid";

import { showSelectedOrder } from "../../helpers/sale";
import {
  showSelectedBill,
  setNewBill,
  payingBill,
  hidePendingBill,
} from "../../helpers/billing";
import { deleteOrder } from "../../helpers/order";
import { currencyFormat } from "../../helpers/product";

const Billing = () => {
  const [bill, setBill] = useState([]);
  const [openBills, setOpenBills] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    function fetch() {
      showSelectedOrder(false).then((arr) => {
        arr.map((obj) => {
          let parseDate = new Date(obj.createdAt).toLocaleDateString();
          return (obj.createdAt = parseDate);
        });
        setBill(arr);
      });
      showSelectedBill(false).then((arr) => {
        arr.map((obj) => {
          let parseDate = new Date(obj.createdAt).toLocaleDateString();
          return (obj.createdAt = parseDate);
        });
        setOpenBills(arr);
      });
    }

    fetch();
  }, []);

  return (
    <>
      <Header />
      <Section
        gradient="from-blue-100 to-purple-100"
        page="Faturamento"
        description="Organize suas cobranças"
      />

      <div className="container mx-auto">
        <div className="flex justify-center my-6">
          <div
            className={`relative rounded-full w-12 h-6 px-px transition duration-200 ease-linear ${
              toggle ? "bg-green-400" : "bg-gray-400"
            } `}
          >
            <label
              htmlFor="toggle"
              className={`absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer ${
                toggle
                  ? "translate-x-full border-green-400"
                  : "translate-x-0 border-gray-400"
              } `}
            ></label>
            <input
              type="checkbox"
              id="toggle"
              name="toggle"
              className="appearance-none rounded-full w-full h-full active:outline-none focus:outline-none"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <h1 className="ml-2 text-xl w-56">
            {!toggle ? "Proposta em andamento" : "Valores em aberto"}
          </h1>
        </div>

        <div className="flex flex-col">
          <table className="table max-w-screen-lg w-full mx-auto shadow-md">
            <thead className="border-b-4 border-indigo-600">
              <tr>
                <th>Cliente</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {!toggle
                ? bill.map((order, key) => (
                    <tr
                      key={key}
                      className={`transition duration-300 ease-in-out hover:bg-indigo-300
                        ${key % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}`}
                    >
                      <td>{order.Customer.name}</td>
                      <td>{order.createdAt}</td>
                      <td>{currencyFormat(order.total_amount)}</td>
                      <td>
                        <Link
                          to="#"
                          className=""
                          onClick={() => setNewBill(order.id)}
                        >
                          <span>
                            <PlusIcon className="inline h-8 w-8 mx-1 text-blue-800 bg-white rounded-full shadow-md" />
                          </span>
                        </Link>
                        <Link
                          to="#"
                          className=""
                          onClick={() => deleteOrder(order.id)}
                        >
                          <span>
                            <XIcon className="inline h-8 w-8 mx-1 text-red-600 bg-white rounded-full shadow-md" />
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))
                : openBills.map((invoice, key) => (
                    <tr
                      key={key}
                      id={`open-bill-${key}`}
                      className={`transition duration-300 ease-in-out hover:bg-indigo-300
                    ${key % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}`}
                    >
                      <td>{invoice.Order.Customer.name}</td>
                      <td>{invoice.createdAt}</td>
                      <td>{currencyFormat(invoice.Order.total_amount)}</td>
                      <td>
                        <Link
                          to="#"
                          className="button is-success"
                          onDoubleClick={() => payingBill(invoice.id)}
                        >
                          <span>
                            <CheckIcon className="inline h-8 w-8 mx-1 text-green-600 bg-white rounded-full shadow-md" />
                          </span>
                        </Link>
                        <Link
                          to="#"
                          className="button is-warning"
                          onClick={() => {
                            let id = `open-bill-${key}`;
                            hidePendingBill(id);
                          }}
                        >
                          <span>
                            <ExclamationIcon className="inline h-8 w-8 mx-1 text-yellow-500 bg-white rounded-full shadow-md" />
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Billing;
