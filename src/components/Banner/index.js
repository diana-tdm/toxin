import * as React from "react";
import SearchForm from "../SearchForm";
import "./style.scss";

// markup
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <SearchForm />
      </div>
    </section>
  );
};

export default Banner;
