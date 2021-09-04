import * as React from "react";
import "./style.scss";

// markup
const Checkbox = () => {
  return (
    <div className="checkbox">
      <div className="checkbox__title">Checkbox Buttons</div>
      <label>
        <input type="checkbox"></input>Можно курить
      </label>
    </div>
  );
};

export default Checkbox;
