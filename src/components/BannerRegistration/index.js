import * as React from "react";
import RegistrationForm from "../RegistrationForm";
import "./style.scss";

// markup
const Banner = () => {
  return (
    <section className="banner-registration">
      <div className="container">
        <RegistrationForm />
      </div>
    </section>
  );
};

export default Banner;
