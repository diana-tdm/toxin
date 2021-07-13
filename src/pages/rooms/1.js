import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RoomDetails from "../../components/RoomDetails";

// markup
const RoomDetailsPage = () => {
  return (
    <main>
      <title>Информация о номере</title>
      <Header />
      <RoomDetails />
      <Footer />
    </main>
  );
};

export default RoomDetailsPage;
