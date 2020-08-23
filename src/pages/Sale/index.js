import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { getAllNames, setNewCustomer } from "../../helpers/customer";
import {
  getOneProduct,
  getAllProducts,
  dotToComma,
} from "../../helpers/product";
import { setPurchaseOrder } from "../../helpers/sale";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Sale = () => {
  const [newcus, setNewcus] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
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
  return (
    <>
      <Header />
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Pedidos de Venda</h1>
            <h2 className="subtitle">registre novos pedidos aqui</h2>
          </div>
        </div>
      </section>
      <div className="breadcrumb is-small is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li className="is-active">
            <Link to="#">Pedidos</Link>
          </li>
        </ul>
      </div>
      <section>
        <div className="container">
          <div className="columns">
            <div className="column is-10-mobile is-offset-1-mobile">
              <fieldset disabled={newcus ? "disabled" : ""}>
                <div className="field">
                  <div className="control">
                    <div className="select is-primary">
                      <select
                        name="customer"
                        id="customer"
                        defaultValue={"DEFAULT"}
                      >
                        <option disabled="disabled" value="DEFAULT">
                          Escolha o Cliente
                        </option>
                        {customerList.map((customer) => (
                          <option
                            key={customer.id}
                            onClick={() => setCustomerId(customer.id)}
                          >
                            {customer.fullname}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div className="field my-4">
                  <div className="control">
                    <label htmlFor="new-client" className="checkbox">
                      <input
                        type="checkbox"
                        name="new-client"
                        id="new-client"
                        onChange={() => setNewcus(!newcus)}
                      />
                      <span> Novo cliente?</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          {newcus && (
            <div className="columns">
              <div className="column is-half is-three-fifths-mobile is-offset-one-fifth-mobile">
                <div className="field">
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Nome completo"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      type="email"
                      className="input"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button
                      className="button is-link"
                      type="button"
                      onClick={() => {
                        setNewCustomer({ fullname, email });
                        window.location.reload();
                      }}
                    >
                      Salvar
                    </button>
                  </p>
                  <p className="control">
                    <button className="button">Cancelar</button>
                  </p>
                </div>
              </div>
            </div>
          )}
          {!newcus && (
            <div className="columns">
              <div className="column is-10-mobile is-offset-1-mobile">
                <div className="field">
                  <label className="label has-text-centered-mobile">
                    Lançar produtos
                  </label>
                  <div className="field is-horizontal has-addons">
                    <p className="control">
                      <label className="label">cód.:</label>
                      <input
                        className="input"
                        type="text"
                        maxLength="6"
                        size="4"
                        onChange={(e) => setProdId(e.target.value)}
                      />
                    </p>
                    <p className="control">
                      <label className="label">Qtde.</label>
                      <input
                        className="input"
                        type="text"
                        maxLength="2"
                        size="2"
                        onChange={(e) => setQty(Math.abs(e.target.value))}
                      />
                    </p>
                    <p className="control">
                      <label className="label">Incluir</label>
                      <Link
                        to="#"
                        className="button is-info"
                        onClick={(e) => addToOrder(e)}
                      >
                        <span className="px-3">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </Link>
                    </p>
                  </div>
                  {err && (
                    <div className="notification is-danger is-light">
                      {err}
                      <button
                        className="delete"
                        onClick={() => setErr("")}
                      ></button>
                    </div>
                  )}
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label has-text-centered-mobile">
                    Incluídos
                  </label>
                  <table className="table is-hoverable">
                    <thead>
                      <tr>
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
                    <tfoot>
                      <tr>
                        <th colSpan="5">TOTAL</th>
                        <th>
                          {order
                            .map((product) => product.price * product.qty)
                            .reduce((total, price) => {
                              let result =
                                parseFloat(total) + parseFloat(price);
                              return result.toFixed(2);
                            }, "0.00")}
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {order.map((product, key) => (
                        <tr key={key}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.qty}</td>
                          <td>{dotToComma(product.price)}</td>
                          <td>
                            {dotToComma(
                              parseFloat(product.price * product.qty).toFixed(2)
                            )}
                          </td>
                          <td>
                            <div className="field is-grouped">
                              <p className="control">
                                <Link
                                  to="#"
                                  className="button is-danger is-small"
                                  onClick={() =>
                                    product.qty > 1
                                      ? product.qty--
                                      : order.splice(key, 1)
                                  }
                                >
                                  -
                                </Link>
                              </p>
                              <p className="control">
                                <Link
                                  to="#"
                                  className="button is-warning is-small"
                                  onClick={() => product.qty++}
                                >
                                  +
                                </Link>
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="field is-grouped is-grouped-centered">
                    <div className="control">
                      <button
                        className="button is-info"
                        onClick={() => setPurchaseOrder(customerId, order)}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span className="pl-1">Incluir</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Sale;
