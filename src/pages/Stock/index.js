import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import {
  setProduct,
  getAllProducts,
  dotToComma,
  commaToDot,
} from "../../helpers/product";

const Stock = () => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [size, setSize] = useState("U");
  const [price, setPrice] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [productList, setProductList] = useState([]);
  const [isNewProduct, setIsNewProduct] = useState(false);

  useEffect(() => {
    function fetch() {
      getAllProducts().then((obj) => setProductList(obj));
    }

    fetch();
  }, []);

  function handleDataset() {
    setIsClicked(!isClicked);
    const payload = { name, unit, size, price };
    setProduct(payload);
  }

  return (
    <>
      <Header />
      <section className="hero is-warning is-bold">
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

      <div className="container">
        <div className="columns mx-6">
          <div className="column">
            <label className="checkbox">
              <input
                type="checkbox"
                name="new-prod"
                id="new-prod"
                onChange={() => setIsNewProduct(!isNewProduct)}
              />
              <span className="mx-1">Novo produto? Clique aqui.</span>
            </label>
          </div>
        </div>
      </div>

      {!isNewProduct && (
        <section>
          <div className="container my-5">
            <table className="table">
              <thead>
                {/* Head */}
                <tr>
                  <th>
                    <abbr title="Código">Cód</abbr>
                  </th>
                  <th>Nome</th>
                  <th>
                    <abbr title="Unidade">Un</abbr>
                  </th>
                  <th>
                    <abbr title="Tamanho">Tam</abbr>
                  </th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {/* Body */}
                {productList.map((product, key) => (
                  <tr key={key}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.unit}</td>
                    <td>{product.size}</td>
                    <td>{dotToComma(product.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {isNewProduct && (
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
                          onChange={(e) => setPrice(commaToDot(e.target.value))}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                  <button
                    className={`button is-dark ${
                      isClicked ? "is-loading" : ""
                    }`}
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
      )}
    </>
  );
};

export default Stock;
