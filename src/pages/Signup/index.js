import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../config/api";

import { PaperAirplaneIcon } from "@heroicons/react/solid";
import Logo from "../../img/v-de-vendinha.png";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [agreement, setAgreement] = useState(false);

  async function register(event) {
    event.preventDefault();

    try {
      if (!name || !email || !password) throw emptyError();

      const payload = {
        email,
        fullname: name,
        password,
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

  function notAgree() {
    return setError(
      "É necessário concordar com os termos marcando a caixa de seleção"
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={Logo} alt="Vendinhas" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Cadastre-se
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                to="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Já tenho cadastro, entrar.
              </Link>
            </p>
            <form className="mt-8 space-y-6" onSubmit={register}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    onChange={() => {
                      setAgreement(!agreement);
                      setError("");
                    }}
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    <p>
                      Declaro que li e concordo com os{" "}
                      <Link
                        to="/#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Termos de uso
                      </Link>
                    </p>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type={agreement ? "submit" : "button"}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={!agreement && (() => notAgree())}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <PaperAirplaneIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Enviar
                </button>
              </div>
              <div>
                {error && (
                  <div className="flex justify-center text-centered">
                    <div className="p-2">
                      <div
                        className="inline-flex items-center bg-red-200 leading-none text-red-500 rounded-md p-2 shadow text-teal text-sm cursor-pointer"
                        onClick={() => setError("")}
                      >
                        <span className="inline-flex bg-red-500 text-white font-medium rounded-full h-6 px-3 justify-center items-center">
                          Erro
                        </span>
                        <span className="inline-flex px-2">{error}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
