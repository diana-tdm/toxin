import * as React from "react";
import Header from "../components/Header";
import SearchRoom from "../components/SearchRoom";
import Footer from "../components/Footer";

// markup
const SearchRoomPage = () => {
  return (
    <main>
      <title>Подбор номера</title>
      <Header />
      <SearchRoom />
      <Footer />
    </main>
  );
};

export default SearchRoomPage;
