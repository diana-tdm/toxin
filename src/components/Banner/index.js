import * as React from "react";
import SearchForm from "../SearchForm";
import "./style.scss";

// markup
const Banner = () => {
  return (
    <section className="banner">
      <div className="container container__banner">
        <SearchForm />
        <div className="banner__text">
          Лучшие номера для вашей работы,
          <br /> отдыха и просто вдохновения
        </div>
      </div>
    </section>
  );
};

export default Banner;
