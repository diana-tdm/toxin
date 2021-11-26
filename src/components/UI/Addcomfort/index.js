import * as React from "react";
import "./style.scss";

// markup
const Addcomfort = () => {
  return (
    <div className="addcomfort">
      <div className="addcomfort__title">дополнительные удобства</div>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Завтрак
      </label>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Письменный
        стол
      </label>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Стул для
        кормления
      </label>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Кроватка
      </label>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Телевизор
      </label>
      <label className="addcomfort__label">
        <input className="addcomfort__input" type="checkbox"></input>Шампунь
      </label>
    </div>
  );
};

export default Addcomfort;
