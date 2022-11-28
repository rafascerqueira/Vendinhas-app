import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../mocks/MOCK_PRODUCT.json';
import customers from '../mocks/MOCK_CUSTOMER.json';

interface ICustomer {
  id: number;
  name: string;
}

interface IProduct {
  name: string;
  price: number;
}

export function Sale() {
  const [queryCustomer, setQueryCustomer] = useState<string>('');
  const [suggestCustomer, setsuggestCustomer] = useState<ICustomer[]>([]);
  const [queryProduct, setQueryProduct] = useState<string>('');
  const [suggestProduct, setSuggestProduct] = useState<IProduct[]>([]);

  function handleCustomer(event: ChangeEvent<HTMLInputElement>): void {
    let value = event.target.value;
    let matches: ICustomer[] = [];

    if (value.length > 0) {
      matches = customers.filter((person) => {
        const regex = new RegExp(`${value}`, 'gi');
        return person.name.match(regex);
      });
    }
    setsuggestCustomer(matches);
    setQueryCustomer(value);
  }

  function handleSuggestCustomer(text: string): void {
    setQueryCustomer(text);
    setsuggestCustomer([]);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    let value = event.target.value;
    let matches: IProduct[] = [];

    if (value.length > 0) {
      matches = products.filter((product) => {
        const regex = new RegExp(`${value}`, 'gi');
        return product.name.match(regex);
      });
    }
    setSuggestProduct(matches);
    setQueryProduct(value);
  }

  function handleSuggestProduct(text: string): void {
    setQueryProduct(text);
    setSuggestProduct([]);
  }

  return (
    <div className="mx-12 md:mx-4 md:my-4">
      <div className="py-4 divide-y dark:divide-cyan-300 space-y-2">
        <div>
          <h1 className="text-4xl text-center">vendas</h1>
        </div>
        <div className="flex justify-around">
          <h2 className="text-2xl">nova venda</h2>
          <h2 className="text-2xl">lista de products</h2>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <form className="space-y-2">
              <div className="space-x-2 mt-4">
                <label htmlFor="customer-field" className="">
                  Cliente
                </label>
                <div className="relative inline-flex">
                  <input
                    type="search"
                    name=""
                    id="customer-field"
                    className="py-1 border-gray-200 focus:ring-0 focus:border-gray-600 dark:bg-slate-300 dark:text-black rounded-md"
                    value={queryCustomer}
                    onChange={handleCustomer}
                  />
                  {queryCustomer && (
                    <div className="absolute left-2 top-8 bg-gray-100 w-32 dark:bg-slate-300 dark:text-black divide-y z-10">
                      {suggestCustomer.length > 0
                        ? suggestCustomer.map((hint, key) => (
                            <div
                              className="px-2 cursor-pointer hover:bg-gray-300"
                              key={key}
                              onClick={() => handleSuggestCustomer(hint.name)}
                            >
                              {hint.name}
                            </div>
                          ))
                        : ''}
                    </div>
                  )}
                </div>
                <Link
                  to={'#'}
                  className="text-cyan-700 dark:text-cyan-500 italic"
                >
                  Novo cliente?
                </Link>
              </div>
              <div className="space-x-2">
                <label htmlFor="product-field" className="">
                  produto
                </label>
                <div className="relative inline-flex">
                  <input
                    type="search"
                    name=""
                    id="product-field"
                    className="py-0 border-gray-200 focus:ring-0 focus:border-gray-600 border-r-0 dark:bg-slate-300 dark:text-black w-36 rounded-tl-md rounded-bl-md"
                    value={queryProduct}
                    onChange={handleSearch}
                  />
                  {queryProduct && (
                    <div className="absolute left-2 top-8 bg-gray-100 w-32 dark:bg-slate-300 dark:text-black divide-y z-10">
                      {suggestProduct.length > 0
                        ? suggestProduct.map((hint, key) => (
                            <div
                              className="px-2 cursor-pointer hover:bg-gray-300"
                              key={key}
                              onClick={() => handleSuggestProduct(hint.name)}
                            >
                              {hint.name}
                            </div>
                          ))
                        : ''}
                    </div>
                  )}
                  <button
                    className="py-1 px-6 bg-rose-600 hover:bg-rose-500 font-bold rounded-tr-md rounded-br-md border-l-0 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out"
                    onClick={(e) => e.preventDefault()}
                  >
                    incluir
                  </button>
                </div>
              </div>
            </form>
            <div className="absolute top-64 left-5 space-x-4 h-64 text-7xl capitalize">
              <span>total</span>
              <span>193,98</span>
            </div>
          </div>
          <div className="mt-4">
            <table className="table-auto border-slate-300">
              <thead>
                <tr>
                  <th className="border-b border-slate-400 px-4 text-center">
                    nome
                  </th>
                  <th className="border-b border-slate-400 px-4 text-center">
                    preço
                  </th>
                  <th className="border-b border-slate-400 px-4 text-center">
                    qtde
                  </th>
                  <th className="border-b border-slate-400 px-4 text-center">
                    ação
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, indx) => (
                  <tr
                    key={indx}
                    className={`hover:bg-slate-800 hover:text-gray-200 dark:hover:bg-cyan-600 transition duration-200 ease-in-out ${
                      indx % 2 != 0 ? `bg-gray-200 dark:bg-slate-700` : ``
                    }`}
                  >
                    <td className="px-4 text-center">{product.name}</td>
                    <td className="px-4 text-center">{product.price}</td>
                    <td className="px-4 text-center">1</td>
                    <td className="px-4 text-center">+ -</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-4 py-1 px-6 w-full bg-sky-400 hover:bg-sky-300 font-bold overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out"
              onClick={(e) => e.preventDefault()}
            >
              salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
