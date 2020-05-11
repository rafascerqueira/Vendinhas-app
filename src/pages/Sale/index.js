import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { getAllNames, setNewCustomer } from "../../helpers/customer";

import "./style.css";

const Sale = () => {
  const [newcus, setNewcus] = useState(false);
  const [item, setItem] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    function fetch() {
      getAllNames().then((obj) => setItem(obj));
    }

    fetch();
  }, []);
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
                    {item.map((customer) => (
                      <option key={customer.id}>{customer.fullname}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
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
                      onClick={() => setNewCustomer({ fullname, email })}
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
            <div className="field">
              <label className="label">Lançar produtos</label>
              <div className="field is-horizontal has-addons">
                <p className="control">
                  <label className="label">cód.:</label>
                  <input className="input" type="text" maxLength="6" size="4" />
                </p>
                <p className="control">
                  <label className="label">Nome</label>
                  <input className="input" type="text" readOnly />
                </p>
                <p className="control">
                  <label className="label">Qtde.</label>
                  <input className="input" type="text" maxLength="2" size="2" />
                </p>
                <p className="control">
                  <label className="label">Incluir</label>
                  <Link to="#" className="button is-info">
                    +
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Sale;
