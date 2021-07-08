import * as React from "react";
import Room from "../Room";
import "./style.scss";

// markup
const Rooms = () => {
  return (
    <>
      <h1 className="rooms__title">Номера, которые мы для вас подобрали</h1>
      <div className="rooms">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </>
  );
};

export default Rooms;
