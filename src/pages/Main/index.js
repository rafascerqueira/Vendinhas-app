import React from "react";
import Header from "../../components/Header";

import "./style.css";

const Main = () => {
  return (
    <>
      <Header />

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-2">Início</h1>
            <h2 className="subtitle">Resumo Geral</h2>
          </div>
        </div>
      </section>

      <div className="container is-fluid">
        <div className="notification">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime
          dolorum dicta, odio mollitia quidem amet iste aspernatur error ipsum
          molestiae at sapiente labore. Repellendus voluptatem ad iusto facilis
          ab?
        </div>
      </div>
    </>
  );
};

export default Main;
