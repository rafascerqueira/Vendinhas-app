import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Header from "../../components/Header";
import Section from "../../components/Section";
import {
  setProduct,
  getAllProducts,
  currencyFormat,
  commaToDot,
} from "../../helpers/product";

const Stock = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [unit, setUnit] = useState("");
  const [size, setSize] = useState("U");
  const [price, setPrice] = useState(0);
  const [productList, setProductList] = useState([]);
  const [isNewProduct, setIsNewProduct] = useState(false);

  useEffect(() => {
    function fetch() {
      getAllProducts().then((obj) => setProductList(obj));
    }

    fetch();
  }, []);

  function handleDataset() {
    const payload = { name, code, unit, size, price };
    setProduct(payload);
  }

  return (
    <>
      <Header />
      <Section page="Estoque" description="Consulte, registre e pequise aqui" />

      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="px-3 py-4 max-w-4xl w-full space-y-8">
            <label className="">
              <input
                type="checkbox"
                name="new-prod"
                id="new-prod"
                onChange={() => setIsNewProduct(!isNewProduct)}
              />
              <span className="mx-1">Novo produto? Clique aqui.</span>
            </label>
            {!isNewProduct && (
              <table className="w-full text-lg bg-gray-100 shadow-md rounded mb-4">
                <thead>
                  {/* Head */}
                  <tr className="border-b-4 border-indigo-400">
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
                    <tr
                      key={key}
                      className="border-b border-indigo-400 text-center"
                    >
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.unit}</td>
                      <td>{product.size}</td>
                      <td>{currencyFormat(product.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isNewProduct && (
              <form className="mt-8 space-y-1" onSubmit={handleDataset}>
                <div className="flex flex-col items-center md:items-stretch">
                  <div>
                    <label htmlFor="name" className="">
                      Nome do produto
                    </label>
                    <input
                      id="name"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="md:flex md:justify-between py-4">
                    <div className="">
                      <label htmlFor="code" className="block md:inline">
                        Cód.
                      </label>
                      <input
                        id="code"
                        type="text"
                        value={code}
                        className="appearance-none rounded-none relative border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="unit" className="block md:inline">
                        Unid.
                      </label>
                      <input
                        id="unit"
                        className="appearance-none rounded-none relative border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="size" className="block md:inline">
                        Tam.
                      </label>

                      <select
                        name="size"
                        id="size"
                        className="appearance-none rounded-none relative border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option value="U">U</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="price" className="block md:inline">
                        Preço
                      </label>
                      <NumberFormat
                        id="price"
                        className="appearance-none rounded-none relative border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        displayType={"input"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        decimalScale={2}
                        onChange={(e) => setPrice(commaToDot(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="rounded-lg shadow-lg bg-indigo-600 w-60 py-2 font-medium text-lg text-white transition duration-300 ease-in-out hover:bg-indigo-400 hover:shadow-none"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
