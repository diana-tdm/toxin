import * as React from "react";
import Room from "../Room";
import Pagination from "../UI/Pagination";
import "./style.scss";

// markup
const Rooms = () => {
  return (
    <>
      <h1 className="rooms__title">Номера, которые мы для вас подобрали</h1>
      <div className="rooms">
        <Room id={1} />
        <Room id={2} />
        <Room id={3} />
        <Room id={4} />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
      <Pagination />
    </>
  );
};

export default Rooms;
