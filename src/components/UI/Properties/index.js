import * as React from "react";
import "./style.scss";

// markup
const Properties = () => {
  return (
    <div className="properties">
      <div className="properties__title">доступность</div>
      <label className="properties__label">
        <input className="properties__input" type="checkbox"></input>Широкий
        коридор
        <div className="properties__text">
          Ширина коридоров в номере не менее 91 см.
        </div>
      </label>
      <label className="properties__label">
        <input className="properties__input" type="checkbox"></input>Помощник
        для инвалидов
        <div className="properties__text">
          На 1 этаже вас встретит специалист и проводит до номера.
        </div>
      </label>
    </div>
  );
};

export default Properties;
