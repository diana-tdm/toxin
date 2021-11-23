import * as React from "react";
import "./style.scss";

// markup
const Checkbox = () => {
  return (
    <div className="checkbox">
      <div className="checkbox__title">Checkbox Buttons</div>
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox"></input>Можно курить
      </label>
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox"></input>Можно с
        питомцами
      </label>
      <label className="checkbox__label">
        <input className="checkbox__input" type="checkbox"></input>Можно
        пригласить гостей <br /> (до 10 человек)
      </label>
    </div>
  );
};

export default Checkbox;
