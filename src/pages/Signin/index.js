import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import api from "../../config/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../img/Vendinhas.png";
import "./style.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(event) {
    event.preventDefault();

    if (!email) {
      return setError("E-mail não inserido!");
    }

    if (!password) {
      return setError("Senha não inserida!");
    }

    try {
      setError("");
      setLoading(true);
      const req = await api.post("/signin", { email, password });
      localStorage.setItem("__client", req.data.name);
      localStorage.setItem("__token", req.data.token);
      props.history.push("/main");
    } catch (e) {
      setLoading(false);
      return setError("Usuário não encontrado!");
    }
  }

  function signup() {
    return props.history.push("/signup");
  }

  return (
    <>
      <form onSubmit={login}>
        <div className="columns is-centered login-form">
          <div className="column is-3 is-three-quarters-mobile">
            <img src={Logo} alt="Vendinhas logo" />
            <hr />
            {error && (
              <div className="notification is-danger">
                <button
                  className="delete"
                  onClick={() => setError("")}
                ></button>
                {error}
              </div>
            )}

            <div className="field">
              <p className="control has-icons-left">
                <input
                  type="email"
                  className="input"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input
                  type="password"
                  className="input"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </p>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-success" type="submit">
                  <span className="icon">
                    <FontAwesomeIcon icon={faSignInAlt} />
                  </span>
                  <span>Login</span>
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  type="button"
                  onClick={signup}
                >
                  Cadastre-se
                </button>
              </div>
            </div>
            {loading && (
              <progress
                className="progress is-small is-dark"
                max="100"
              ></progress>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default withRouter(Signin);
