import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./style.scss";

// markup
const Room = ({ id }) => {
  return (
    <div className="room">
      <div>
        <AwesomeSlider>
          <div data-src={`/images/rooms/01.jpg`} />
          <div data-src={`/images/rooms/02.jpg`} />
          <div data-src={`/images/rooms/03.jpg`} />
          <div data-src={`/images/rooms/04.jpg`} />
        </AwesomeSlider>
      </div>
      <div className="room__info">
        <div className="room__number">
          <Link to="/rooms/1">
            {" "}
            № 888 <span className="room__type">люкс</span>
          </Link>
        </div>
        <div className="room__price">
          9 990₽ <span className="room__time">в сутки</span>
        </div>
      </div>
      <div className="room__rating">
        <div className="room__stars">
          <FontAwesomeIcon icon={faStar} size="1x" />
          <FontAwesomeIcon icon={faStar} size="1x" />
          <FontAwesomeIcon icon={faStar} size="1x" />
          <FontAwesomeIcon icon={faStar} size="1x" />
          <FontAwesomeIcon icon={faStarEmpty} size="1x" />
        </div>
        <div className="room__reviews">
          <span className="room__reviews-number">145</span> Отзывов
        </div>
      </div>
    </div>
  );
};

export default Room;
