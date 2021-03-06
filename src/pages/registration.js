import * as React from "react";
import Header from "../components/Header";
import BannerRegistration from "../components/BannerRegistration";
import Footer from "../components/Footer";

// markup
const RegistrationPage = () => {
  return (
    <main>
      <title>Отель Toxin</title>
      <Header />
      <BannerRegistration />
      <Footer />
    </main>
  );
};

export default RegistrationPage;
