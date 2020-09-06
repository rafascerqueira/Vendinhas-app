import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Billing = () => {
  return (
    <>
      <Header />
      <Section
        hero="hero is-primary"
        page="Faturamento"
        description="Organize suas cobranças"
      />
      <div
        className="columns is-centered my-2 has-text-centered"
        id="billing-page"
      >
        <div className="column is-4">
          <table className="table is-narrow">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Data</th>
                <th>Valor</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teste</td>
                <td>25/04/2020</td>
                <td>384,66</td>
                <td>
                  <div className="field is-grouped">
                    <p className="control">
                      <Link to="#" className="button is-success">
                        <span>
                          <FontAwesomeIcon icon={faFileInvoiceDollar} />
                        </span>
                      </Link>
                    </p>
                    <p className="control">
                      <Link to="#" className="button is-warning">
                        <span>
                          <FontAwesomeIcon icon={faFileAlt} />
                        </span>
                      </Link>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Billing;
