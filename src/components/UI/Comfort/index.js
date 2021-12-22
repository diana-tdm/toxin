import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function countRoom(count) {
  if (count === 1) return "1 спальня";
  if (count > 4) return `${count} спален`;
  return `${count} спальни`;
}
function countBed(count) {
  if (count === 1) return "1 кровать";
  if (count > 4) return `${count} кроватей`;
  return `${count} кровати`;
}
function countBathroom(count) {
  if (count === 1) return "1 ванная";
  if (count > 4) return `${count} ванных`;
  return `${count} ванные`;
}

// markup
const Comfort = () => {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = React.useState(1);
  const [bed, setBed] = React.useState(1);
  const [bathroom, setBathroom] = React.useState(0);
  const [text, setText] = React.useState("1 спальня, 1 кровать");

  const handleClick = () => {
    setOpen(!open);
  };

  // const clear = () => {
  //   setRoom(0);
  //   setBed(0);
  //   setBathroom(0);
  //   setText("Сколько гостей");
  // };

  React.useEffect(() => {
    setText(
      `${countRoom(room)}${bed ? `, ${countBed(bed)}` : ""} ${
        bathroom ? ` , ${countBathroom(bathroom)}` : ""
      } `
    );
  }, [room, bed, bathroom]);

  return (
    <label className="comfort">
      удобства номера
      <div
        className={`comfort__wrapper ${open ? "comfort__wrapper--open" : ""}`}
      >
        <button type="button" className="comfort__button" onClick={handleClick}>
          <span>{text}</span>
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </button>
        <div
          className={`comfort__dropdown ${
            open ? "comfort__dropdown--open" : ""
          }`}
        >
          <div className="comfort__dropdown-item">
            <div className="comfort__dropdown-item-title">спальни </div>
            <button
              type="button"
              onClick={() => setRoom(room - 1)}
              className="comfort__dropdown-item-button"
              disabled={room === 1}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{room}</div>
            <button
              type="button"
              onClick={() => setRoom(room + 1)}
              className="comfort__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="comfort__dropdown-item">
            <div className="comfort__dropdown-item-title">кровати </div>
            <button
              type="button"
              onClick={() => setBed(bed - 1)}
              className="comfort__dropdown-item-button"
              disabled={bed === 1}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{bed}</div>
            <button
              type="button"
              onClick={() => setBed(bed + 1)}
              className="comfort__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="comfort__dropdown-item">
            <div className="comfort__dropdown-item-title">ванные комнаты </div>
            <button
              type="button"
              onClick={() => {
                setBathroom(bathroom - 1);
              }}
              className="comfort__dropdown-item-button"
              disabled={bathroom === 0}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{bathroom}</div>
            <button
              type="button"
              onClick={() => {
                setBathroom(bathroom + 1);
              }}
              className="comfort__dropdown-item-button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default Comfort;
