import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Sale = () => {
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

      <section style={{ marginTop: 10 }}>
        <div className="container">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select name="customer" id="customer" defaultValue={"DEFAULT"}>
                  <option value="DEFAULT">Cliente</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="new-client" className="checkbox">
                <input type="checkbox" name="new-client" id="new-client" />
                <span> Novo cliente?</span>
              </label>
            </div>
          </div>

          <div className="columns">
            <div className="column is-half is-three-fifths-mobile is-offset-one-fifth-mobile">
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder="Nome completo"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input type="email" className="input" placeholder="E-mail" />
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <button className="button is-link">Salvar</button>
                </p>
                <p className="control">
                  <button className="button">Cancelar</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
