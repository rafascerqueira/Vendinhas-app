import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { setProduct } from "../../helpers/product";

const Stock = () => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [size, setSize] = useState("U");
  const [price, setPrice] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  function handleDataset() {
    setIsClicked(!isClicked);
    const payload = { name, unit, size, price };
    setProduct(payload);
  }

  return (
    <>
      <Header />
      <section className="hero is-warning">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Estoque dos Produtos</h1>
            <h2 className="subtitle">Consulte, registre e pequise aqui</h2>
          </div>
        </div>
      </section>
      <div className="breadcrumb is-small is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li className="is-active">
            <Link to="#">Estoque</Link>
          </li>
        </ul>
      </div>
      <section>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Nome</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-primary"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Unid.</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-primary"
                        type="text"
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Tam.</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <div className="select is-primary">
                        <select
                          name="size"
                          id="size"
                          onChange={(e) => setSize(e.target.value)}
                        >
                          <option value="U">U</option>
                          <option value="P">P</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="GG">GG</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  <label className="label">Preço</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input is-primary"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-grouped is-grouped-right">
                <button
                  className={`button is-dark ${isClicked ? "is-loading" : ""}`}
                  onClick={() => handleDataset()}
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stock;
