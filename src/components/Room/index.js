import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import ReactSiema from "react-siema";
import "./style.scss";

const options = {
  resizeDebounce: 250,
  duration: 200,
  easing: "ease-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: false,
};

// markup
const Room = ({ id }) => {
  return (
    <Link to="/rooms/1">
      <div className="room">
        <div>
          <ReactSiema {...options}>
            <img src={`/images/rooms/0${id}.jpg`} />
            <img src={`/images/rooms/0${id}.jpg`} />
            <img src={`/images/rooms/0${id}.jpg`} />
            <img src={`/images/rooms/0${id}.jpg`} />
          </ReactSiema>
        </div>
        <div className="room__info">
          <div className="room__number">
            № 888 <span className="room__type">люкс</span>
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
    </Link>
  );
};

export default Room;
