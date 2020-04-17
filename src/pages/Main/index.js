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

      <div
        className="columns is-mobile is-multiline is-centered"
        style={{ marginTop: 10 }}
      >
        <div className="column is-narrow-desktop is-full-mobile">
          <div className="box notification is-primary">
            <div className="heading">top vendas total</div>
            <h1 className="title">246,68</h1>
            <div className="level">
              <div className="level-item is-block has-text-centered">
                <div className="heading">Vendas $</div>
                <div className="title is-5">490</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">Lucro $</div>
                <div className="title is-5">212</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">vendas %</div>
                <div className="title is-5">12%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow-desktop is-full-mobile">
          <div className="box notification is-warning">
            <div className="heading">top vendas total</div>
            <h1 className="title">246,68</h1>
            <div className="level">
              <div className="level-item is-block has-text-centered">
                <div className="heading">Vendas $</div>
                <div className="title is-5">490</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">Lucro $</div>
                <div className="title is-5">212</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">vendas %</div>
                <div className="title is-5">12%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow-desktop is-full-mobile">
          <div className="box notification is-link">
            <div className="heading">top vendas total</div>
            <h1 className="title">246,68</h1>
            <div className="level">
              <div className="level-item is-block has-text-centered">
                <div className="heading">Vendas $</div>
                <div className="title is-5">490</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">Lucro $</div>
                <div className="title is-5">212</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">vendas %</div>
                <div className="title is-5">12%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-narrow-desktop is-full-mobile">
          <div className="box notification is-danger">
            <div className="heading">top vendas total</div>
            <h1 className="title">246,68</h1>
            <div className="level">
              <div className="level-item is-block has-text-centered">
                <div className="heading">Vendas $</div>
                <div className="title is-5">490</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">Lucro $</div>
                <div className="title is-5">212</div>
              </div>
              <div className="level-item is-block has-text-centered">
                <div className="heading">vendas %</div>
                <div className="title is-5">12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
