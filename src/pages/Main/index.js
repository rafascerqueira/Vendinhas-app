import React from "react";
import { Link } from "react-router-dom";

const Main = props => {
  function logout() {
    localStorage.removeItem("__client");
    localStorage.removeItem("__token");
  }

  return (
    <>
      <h1 className="title is-2">Main Page</h1>
      <Link to="/" onClick={logout}>
        Sair
      </Link>
    </>
  );
};

export default Main;
