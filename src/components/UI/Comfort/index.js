import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const Comfort = () => {
  const [open, setOpen] = React.useState(false);
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [infant, setInfant] = React.useState(0);
  const [text, setText] = React.useState("Сколько гостей");

  const handleClick = () => {
    setOpen(!open);
  };

  const clear = () => {
    setAdult(0);
    setChildren(0);
    setInfant(0);
    setText("Сколько гостей");
  };

  const apply = () => {
    const count = adult + children + infant;
    setText(`${count} гостей`);
    setOpen(false);
  };

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
              onClick={() => setAdult(adult - 1)}
              className="comfort__dropdown-item-button"
              disabled={adult === 0}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{adult}</div>
            <button
              type="button"
              onClick={() => setAdult(adult + 1)}
              className="comfort__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="comfort__dropdown-item">
            <div className="comfort__dropdown-item-title">кровати </div>
            <button
              type="button"
              onClick={() => setChildren(children - 1)}
              className="comfort__dropdown-item-button"
              disabled={children === 0}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{children}</div>
            <button
              type="button"
              onClick={() => setChildren(children + 1)}
              className="comfort__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="comfort__dropdown-item">
            <div className="comfort__dropdown-item-title">ванные комнаты </div>
            <button
              type="button"
              onClick={() => setInfant(infant - 1)}
              className="comfort__dropdown-item-button"
              disabled={infant === 0}
            >
              -
            </button>
            <div className="comfort__dropdown-item-count">{infant}</div>
            <button
              type="button"
              onClick={() => setInfant(infant + 1)}
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
