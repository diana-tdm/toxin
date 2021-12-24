import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RoomDetails from "../../components/RoomDetails";

// markup
const RoomDetailsPage = (props) => {
  return (
    <main>
      <title>Информация о номере</title>
      <Header />
      <RoomDetails id={props.params.id} />
      <Footer />
    </main>
  );
};

export default RoomDetailsPage;
