import React from "react";
import { Link } from "react-router-dom";

const Section = (props) => {
  return (
    <>
      <section
        className={
          "mx-auto px-4 lg:px-8 bg-gradient-to-r from-indigo-500 to-gray-100 border-t-0 border-purple-500 border-b-4"
        }
      >
        <div className="px-4 py-6 sm:px-0 h-50 lg:h-35 min-h-20 text-white">
          <h1 className="font-semibold tracking-widest text-3xl lg:text-5xl md:text-4xl sm:text-3xl">
            {props.page}
          </h1>
          <h2 className="text-xl italic tracking-tighter lg:text-3xl md:text-2xl sm:text-xl">
            {props.description}
          </h2>
        </div>
      </section>
      <div className="container mx-auto px-4 lg:px-8">
        <ul className="list-reset flex">
          <li>
            <Link to="/dashboard" className="text-blue-900">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="#" className="underline">
              {props.page}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Section;
