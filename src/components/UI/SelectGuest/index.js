import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const SelectGuest = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <label className="select-guest">
      гости
      <div className="select-guest__wrapper">
        <button
          type="button"
          className="select-guest__button"
          onClick={handleClick}
        >
          <span>Сколько гостей</span>
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </button>
        <div
          className={`select-guest__dropdown ${
            open ? "select-guest__dropdown--active" : ""
          }`}
        >
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Взролые </div>
            <button className="select-guest__dropdown-item-button">-</button>
            <div className="select-guest__dropdown-item-count">2</div>
            <button className="select-guest__dropdown-item-button">+</button>
          </div>
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Дети </div>
            <button className="select-guest__dropdown-item-button">-</button>
            <div className="select-guest__dropdown-item-count">1</div>
            <button className="select-guest__dropdown-item-button">+</button>
          </div>
          <div className="select-guest__dropdown-item">
            <div className="select-guest__dropdown-item-title">Младенцы </div>
            <button className="select-guest__dropdown-item-button">-</button>
            <div className="select-guest__dropdown-item-count">0</div>
            <button className="select-guest__dropdown-item-button">+</button>
          </div>
          <div className="select-guest__dropdown-buttons">
            <button className="select-guest__dropdown-button">очистить</button>
            <button className="select-guest__dropdown-button">применить</button>
          </div>
        </div>
      </div>
    </label>
  );
};

export default SelectGuest;
