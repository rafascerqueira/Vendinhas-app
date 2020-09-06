import React from "react";
import { Link } from "react-router-dom";

const Section = (props) => {
  return (
    <>
      <section className={props.hero}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{props.page}</h1>
            <h2 className="subtitle">{props.description}</h2>
          </div>
        </div>
      </section>
      <div className="breadcrumb is-small is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/main">Home</Link>
          </li>
          <li className="is-active">
            <Link to="#">{props.page}</Link>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default Section;
