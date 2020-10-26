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
import { showSelectedBill } from "../../helpers/billing";
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
              <tr>
                <td>Teste</td>
                <td>25/04/2020</td>
                <td>384,66</td>
                <td>
                  <div className="field is-grouped">
                    <p className="control">
                      <Link to="#" className="button is-info">
                        <span>
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </Link>
                    </p>
                    <p className="control">
                      <Link to="#" className="button is-danger">
                        <span>
                          <FontAwesomeIcon icon={faWindowClose} />
                        </span>
                      </Link>
                    </p>
                  </div>
                </td>
              </tr>
              {bill.map((invoice, key) => (
                <tr key={key}>
                  <td>{invoice.Customer.fullname}</td>
                  <td>{invoice.createdAt}</td>
                  <td>{currencyFormat(invoice.total_amount)}</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">
                        <Link to="#" className="button is-info">
                          <span>
                            <FontAwesomeIcon icon={faPlus} />
                          </span>
                        </Link>
                      </p>
                      <p className="control">
                        <Link to="#" className="button is-danger">
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
              {openBills.map((resp, key) => (
                <tr key={key}>
                  <td>{resp.Order.Customer.fullname}</td>
                  <td>{resp.createdAt}</td>
                  <td>{currencyFormat(resp.Order.total_amount)}</td>
                  <td>
                    <div className="field is-grouped">
                      <p className="control">
                        <Link to="#" className="button is-success">
                          <span>
                            <FontAwesomeIcon icon={faCheck} />
                          </span>
                        </Link>
                      </p>
                      <p className="control">
                        <Link to="#" className="button is-warning">
                          <span>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                          </span>
                        </Link>
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Teste</td>
                <td>25/04/2020</td>
                <td>384,66</td>
                <td>
                  <div className="field is-grouped">
                    <p className="control">
                      <Link to="#" className="button is-success">
                        <span>
                          <FontAwesomeIcon icon={faCheck} />
                        </span>
                      </Link>
                    </p>
                    <p className="control">
                      <Link to="#" className="button is-warning">
                        <span>
                          <FontAwesomeIcon icon={faExclamationTriangle} />
                        </span>
                      </Link>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Billing;
