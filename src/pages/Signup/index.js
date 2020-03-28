import React, { useState } from "react";
import api from "../../config/api";

const Signup = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function register(event) {
    event.preventDefault();

    try {
      if (!name || !email || !password) throw emptyError();

      const payload = {
        email,
        fullname: name,
        password
      };

      await api.post("/signup", payload);

      props.history.push("/");
    } catch (e) {
      if (typeof e === "object") {
        setError("Usuário já cadastrado");
      } else {
        setError(e);
      }
    }
  }

  function emptyError() {
    return "preencha o campo vazio";
  }

  function cancelRegister(event) {
    event.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    props.history.push("/");
  }

  return (
    <>
      <form onSubmit={register}>
        <div className="columns login-form">
          <div className="column is-3 is-three-quarters-mobile">
            <h1 className="title is-2 title-centered">Cadastre-se</h1>
            <hr />
            <div className="field">
              <label className="label">Nome</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Nome completo"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">E-mail</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  placeholder="seuemail@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Senha</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && (
              <div className="tags has-addons">
                <span className="tag is-warning">{error}</span>
                {/* eslint-disable-next-line  */}
                <a className="tag is-delete" onClick={() => setError("")}></a>
              </div>
            )}
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link" type="submit">
                  Enviar
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  type="button"
                  onClick={cancelRegister}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
