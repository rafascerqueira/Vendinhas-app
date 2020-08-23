import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Vendinhas.png";
import Doge from "../../img/doge-worker-helmet.png";

import "./style.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function logout() {
    localStorage.removeItem("__client");
    localStorage.removeItem("__token");
  }

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/main">
            <img src={Logo} alt="Logo Vendinhas" />
          </Link>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
            <Link className="navbar-item" to="/sale">
              Pedidos
            </Link>

            <Link className="navbar-item" to="/stock">
              Estoque
            </Link>

            <Link className="navbar-item" to="/billing">
              Faturamento
            </Link>
          </div>

          <div className="navbar-end">
            <figure className="media-left py-1">
              <p className="image is-48x48">
                <img src={Doge} alt="foto de perfil" />
              </p>
            </figure>
            <div
              className={`navbar-item has-dropdown ${
                isClicked ? "is-active" : ""
              } `}
            >
              <Link
                className="navbar-link"
                to="#"
                onClick={() => setIsClicked(!isClicked)}
              >
                <strong>{localStorage.getItem("__client")}</strong>
              </Link>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/perfil">
                  Perfil
                </Link>
                <hr className="navbar-divider" />
                <Link
                  className="navbar-item has-text-danger"
                  to="/"
                  onClick={logout}
                >
                  <strong>Sair</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
