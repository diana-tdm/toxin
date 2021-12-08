import * as React from "react";
import LoginForm from "../LoginForm";
import "./style.scss";

// markup
const BannerLogin = () => {
  return (
    <section className="banner-login">
      <div className="container container--login">
        <LoginForm />
      </div>
    </section>
  );
};

export default BannerLogin;
