import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const SelectGuest = () => {
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
    <label className="select-guest">
      гости
      <div
        className={`select-guest__wrapper ${
          open ? "select-guest__wrapper--open" : ""
        }`}
      >
        <button
          type="button"
          className="select-guest__button"
          onClick={handleClick}
        >
          <span>{text}</span>
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </button>
        <div
          className={`select-guest__dropdown ${
            open ? "select-guest__dropdown--open" : ""
          }`}
        >
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Взрослые </div>
            <button
              type="button"
              onClick={() => setAdult(adult - 1)}
              className="select-guest__dropdown-item-button"
              disabled={adult === 0}
            >
              -
            </button>
            <div className="select-guest__dropdown-item-count">{adult}</div>
            <button
              type="button"
              onClick={() => setAdult(adult + 1)}
              className="select-guest__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Дети </div>
            <button
              type="button"
              onClick={() => setChildren(children - 1)}
              className="select-guest__dropdown-item-button"
              disabled={children === 0}
            >
              -
            </button>
            <div className="select-guest__dropdown-item-count">{children}</div>
            <button
              type="button"
              onClick={() => setChildren(children + 1)}
              className="select-guest__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Младенцы </div>
            <button
              type="button"
              onClick={() => setInfant(infant - 1)}
              className="select-guest__dropdown-item-button"
              disabled={infant === 0}
            >
              -
            </button>
            <div className="select-guest__dropdown-item-count">{infant}</div>
            <button
              type="button"
              onClick={() => setInfant(infant + 1)}
              className="select-guest__dropdown-item-button"
            >
              +
            </button>
          </div>
          <div className="select-guest__dropdown-buttons">
            <button
              type="button"
              onClick={clear}
              className="select-guest__dropdown-button"
            >
              очистить
            </button>
            <button
              type="button"
              onClick={apply}
              className="select-guest__dropdown-button"
            >
              применить
            </button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default SelectGuest;
