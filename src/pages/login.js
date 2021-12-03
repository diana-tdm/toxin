import * as React from "react";
import Header from "../components/Header";
import BannerLogin from "../components/BannerLogin";
import Footer from "../components/Footer";

// markup
const LoginPage = () => {
  return (
    <main>
      <title>Отель Toxin</title>
      <Header />
      <BannerLogin />
      <Footer />
    </main>
  );
};

export default LoginPage;
