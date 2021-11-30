import * as React from "react";
import RegistrationForm from "../RegistrationForm";
import "./style.scss";

// markup
const BannerRegistration = () => {
  return (
    <section className="banner-registration">
      <div className="container container--registration">
        <RegistrationForm />
      </div>
    </section>
  );
};

export default BannerRegistration;
