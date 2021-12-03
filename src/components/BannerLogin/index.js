import * as React from "react";
import LoginForm from "../LoginForm";
import "./style.scss";

// markup
const BannerLogin = () => {
  return (
    <section className="banner-registration">
      <div className="container container--registration">
        <LoginForm />
      </div>
    </section>
  );
};

export default BannerLogin;
