import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const SelectGuest = () => {
  return (
    <label className="select-guest">
      гости
      <button className="select-guest__button">
        <span>Сколько гостей</span>
        <FontAwesomeIcon icon={faChevronDown} size="1x" />
      </button>
      <div className="select-guest__dropdown">
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
    </label>
  );
};

export default SelectGuest;
