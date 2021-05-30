import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
  faPlus,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

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
        hero="hero is-primary"
        page="Faturamento"
        description="Organize suas cobranças"
      />
      <div
        className="columns is-centered my-2 has-text-centered"
        id="billing-page"
      >
        <div className="column is-4">
          <h2 className="subtitle">Pedidos em andamento</h2>
          <table className="table is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {bill.map((order, key) => (
                <tr key={key}>
                  <td>{order.Customer.name}</td>
                  <td>{order.createdAt}</td>
                  <td>{currencyFormat(order.total_amount)}</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">
                        <Link
                          to="#"
                          className="button is-info"
                          onClick={() => setNewBill(order.id)}
                        >
                          <span>
                            <FontAwesomeIcon icon={faPlus} />
                          </span>
                        </Link>
                      </p>
                      <p className="control">
                        <Link
                          to="#"
                          className="button is-danger"
                          onClick={() => deleteOrder(order.id)}
                        >
                          <span>
                            <FontAwesomeIcon icon={faWindowClose} />
                          </span>
                        </Link>
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column is-4">
          <h2 className="subtitle">Lista de cobrança</h2>
          <table className="table is-narrow is-fullwidth">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {openBills.map((invoice, key) => (
                <tr key={key} id={`open-bill-${key}`}>
                  <td>{invoice.Order.Customer.name}</td>
                  <td>{invoice.createdAt}</td>
                  <td>{currencyFormat(invoice.Order.total_amount)}</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">
                        <Link
                          to="#"
                          className="button is-success"
                          onDoubleClick={() => payingBill(invoice.id)}
                        >
                          <span>
                            <FontAwesomeIcon icon={faCheck} />
                          </span>
                        </Link>
                      </p>
                      <p className="control">
                        <Link
                          to="#"
                          className="button is-warning"
                          onClick={() => {
                            let id = `open-bill-${key}`;
                            hidePendingBill(id);
                          }}
                        >
                          <span>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                          </span>
                        </Link>
                      </p>
                    </div>
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
