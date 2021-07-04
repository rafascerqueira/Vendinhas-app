import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import api from "../../config/api";
import { LockClosedIcon } from "@heroicons/react/solid";

import Logo from "../../img/Vendinhas.png";
import "./style.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      const req = await api.post("/signin", { email, password });
      localStorage.setItem("__id", req.data.id);
      localStorage.setItem("__client", req.data.name);
      localStorage.setItem("__token", req.data.token);
      props.history.push("/dashboard");
    } catch (e) {
      return setError("Usuário não encontrado!");
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={Logo} alt="Vendinhas" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Entre com sua conta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Registre-se com 30 dias de teste gratuito.
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={login}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu a sua senha?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Entrar
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
    </>
  );
};

export default withRouter(Signin);
