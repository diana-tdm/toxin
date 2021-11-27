import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const Addcomfort = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="addcomfort">
      <button type="button" className="addcomfort__title" onClick={handleClick}>
        дополнительные удобства{" "}
        <div
          className={`addcomfort__icon ${
            open ? "addcomfort__icon--active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </div>
      </button>
      {open && (
        <>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>Завтрак
          </label>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>
            Письменный стол
          </label>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>Стул
            для кормления
          </label>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>
            Кроватка
          </label>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>
            Телевизор
          </label>
          <label className="addcomfort__label">
            <input className="addcomfort__input" type="checkbox"></input>Шампунь
          </label>
        </>
      )}
    </div>
  );
};

export default Addcomfort;
