import * as React from "react";
import Room from "../Room";
import Pagination from "../UI/Pagination";
import "./style.scss";

// markup
const Rooms = () => {
  const rooms = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <>
      <h1 className="rooms__title">Номера, которые мы для вас подобрали</h1>
      <div className="rooms">
        {rooms.map((id) => (
          <Room id={id} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default Rooms;
