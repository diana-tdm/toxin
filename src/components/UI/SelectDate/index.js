import * as React from "react";
import $ from "jquery";
import "air-datepicker/dist/js/datepicker.js";
import "air-datepicker/dist/css/datepicker.css";
import "./style.scss";

// markup
const SelectDate = ({ children, secondary, arrow, addClass }) => {
  const arrivalField = React.useRef(null);
  const leaveField = React.useRef(null);
  const datesField = React.useRef(null);

  function onSelect(formattedDate, date, inst) {
    const dates = formattedDate.split(",");
    arrivalField.current.value = dates[0] ?? "";
    leaveField.current.value = dates[1] ?? "";
  }

  function toggle() {
    const datepicker = $(datesField.current).datepicker().data("datepicker");
    datepicker.show();
  }

  React.useEffect(() => {
    $(datesField.current).datepicker({
      dateFormat: "dd.mm.yyyy",
      clearButton: true,
      todayButton: true,
      range: true,
      inline: true,
      onSelect,
      prevHtml: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/>
      </svg>
      `,
      nextHtml: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z" fill="#BC9CFF"/>
      </svg>
      `,
    });
  }, []);
  return (
    <div className="select-date">
      <div className="select-date__date ">
        <label className="select-date__date-label">
          прибытие
          <input
            ref={arrivalField}
            className="select-date__date-input"
            type="text"
            onClick={toggle}
          ></input>
        </label>
      </div>
      <div className="select-date__date">
        <label className="select-date__date-label">
          выезд
          <input
            ref={leaveField}
            className="select-date__date-input"
            type="text"
            onClick={toggle}
          ></input>
        </label>
        <input ref={datesField} className="select-date__hidden-input"></input>
      </div>
    </div>
  );
};

export default SelectDate;
