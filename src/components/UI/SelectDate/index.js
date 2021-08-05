import * as React from "react";
import $ from "jquery";
import "air-datepicker/dist/js/datepicker.js";
import "air-datepicker/dist/css/datepicker.css";
import "./style.scss";

// markup
const SelectDate = ({ children, secondary, arrow, addClass }) => {
  const arrivalField = React.useRef(null);
  const leaveField = React.useRef(null);

  React.useEffect(() => {
    $(arrivalField.current).datepicker({
      dateFormat: "dd.mm.yyyy",
      clearButton: true,
      range: true,
    });
  }, []);
  return (
    <div className="searchform__dates">
      <div className="searchform__date">
        <label className="searchform__date-label">
          прибытие
          <input ref={arrivalField} className="searchform__date-input"></input>
        </label>
      </div>
      <div className="searchform__date">
        <label className="searchform__date-label">
          выезд
          <input
            ref={leaveField}
            className="searchform__date-input"
            type="date"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default SelectDate;
