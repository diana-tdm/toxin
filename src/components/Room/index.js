import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./style.scss";

function num_word(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];
  return words[2];
}

const rooms = [
  {
    number: 888,
    price: 9990,
    lux: true,
    reviews: 145,
    stars: 5,
  },
  {
    number: 840,
    price: 9900,
    reviews: 65,
    stars: 4,
  },
  {
    number: 980,
    price: 8500,
    reviews: 31,
    stars: 3,
  },
  {
    number: 856,
    price: 7300,
    reviews: 19,
    stars: 5,
  },
  {
    number: 740,
    price: 6000,
    reviews: 44,
    stars: 4,
  },
  {
    number: 982,
    price: 5800,
    reviews: 56,
    stars: 3,
  },
  {
    number: 678,
    price: 5500,
    reviews: 45,
    stars: 5,
  },
  {
    number: 450,
    price: 5300,
    reviews: 39,
    stars: 4,
  },
  {
    number: 350,
    price: 5000,
    reviews: 77,
    stars: 3,
  },
  {
    number: 666,
    price: 5000,
    reviews: 25,
    stars: 5,
  },
  {
    number: 444,
    price: 5000,
    reviews: 15,
    stars: 4,
  },
  {
    number: 352,
    price: 5000,
    reviews: 55,
    stars: 3,
  },
];

// markup
const Room = ({ id }) => {
  return (
    <div className="room">
      <div>
        <AwesomeSlider>
          <div data-src={`/images/rooms/0${id}_1.jpg`} />
          <div data-src={`/images/rooms/0${id}_2.jpg`} />
          <div data-src={`/images/rooms/0${id}_3.jpg`} />
          <div data-src={`/images/rooms/0${id}_4.jpg`} />
        </AwesomeSlider>
      </div>
      <div className="room__info">
        <div className="room__number">
          <Link to="/rooms/1">
            № {rooms[id - 1]?.number}{" "}
            {rooms[id - 1]?.lux && <span className="room__type">люкс</span>}
          </Link>
        </div>
        <div className="room__price">
          {rooms[id - 1]?.price}₽ <span className="room__time">в сутки</span>
        </div>
      </div>
      <div className="room__rating">
        <div className="room__stars">
          {Array.from({ length: 5 }, (_, index) =>
            index + 1 > rooms[id - 1]?.stars ? (
              <FontAwesomeIcon icon={faStarEmpty} size="1x" />
            ) : (
              <FontAwesomeIcon icon={faStar} size="1x" />
            )
          )}
        </div>
        <div className="room__reviews">
          <span className="room__reviews-number">{rooms[id - 1]?.reviews}</span>{" "}
          {num_word(rooms[id - 1]?.reviews, ["Отзыв", "Отзыва", "Отзывов"])}
        </div>
      </div>
    </div>
  );
};

export default Room;
