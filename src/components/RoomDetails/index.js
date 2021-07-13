import * as React from "react";
import RoomBanner from "../RoomBanner";
import RoomInfo from "../RoomInfo";
import Review from "../Review";
import "./style.scss";

// markup
const RoomDetails = () => {
  return (
    <>
      <div>
        <RoomBanner />
      </div>
      <div className="container">
        <RoomInfo />
      </div>
      <div className="container">
        <Review />
      </div>
    </>
  );
};

export default RoomDetails;
