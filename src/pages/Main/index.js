/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Vendinhas.png";

import "./style.css";

const Main = () => {
  const [isActive, setIsActive] = useState(false);

  function logout() {
    localStorage.removeItem("__client");
    localStorage.removeItem("__token");
  }

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/main">
            <img src={Logo} alt="Logo Vendinhas" />
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMainApp"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarMainApp"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">Pedidos</a>

            <a className="navbar-item">Estoque</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Venda</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Novo Venda</a>
                <a className="navbar-item">Alterar</a>
                <a className="navbar-item">Exclusão</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Total p/ período</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>
                    {localStorage.getItem("__client") || "Visitante"}
                  </strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <h1 className="title is-2">Main Page</h1>
      <Link to="/" onClick={logout}>
        Sair
      </Link>
    </>
  );
};

export default Main;
