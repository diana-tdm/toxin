import * as React from "react";
import "./style.scss";

// markup
const RoomComfort = () => {
  return (
    <div className="room-comfort">
      <div className="room-comfort__icon">
        <img src="/images/icon/01.svg" alt="icon" />
      </div>
      <div className="room-comfort__items">
        <div className="room-comfort__title">Комфорт</div>
        <div className="room-comfort__text">Шумопоглощающие стены</div>
      </div>
    </div>
  );
};

export default RoomComfort;
