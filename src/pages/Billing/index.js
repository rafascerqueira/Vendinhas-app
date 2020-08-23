import React from "react";
import Header from "../../components/Header";

const Billing = () => {
  // things
  return (
    <>
      <Header />
      <div className="columns is-centered my-6" id="billing-page">
        <div className="column is-3 is-10-mobile is-offset-1-mobile">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Faturamento</p>
            </header>
            <div className="card-content">
              <div className="content">Lugar onde se cobra quem te deve.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
