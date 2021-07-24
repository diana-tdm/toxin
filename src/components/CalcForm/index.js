import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import "./style.scss";

// markup
const CalcForm = () => {
  return (
    <form className="calc-form">
      <div className="calc-form__info">
        <div className="calc-form__number">
          № 888 <span className="calc-form__type">люкс</span>
        </div>
        <div className="calc-form__price">
          9 990₽ <span className="calc-form__time">в сутки</span>
        </div>
      </div>
      <div className="calc-form__dates">
        <div className="calc-form__date">
          <label className="calc-form__date-label">
            прибытие
            <input className="calc-form__date-input" type="date"></input>
          </label>
        </div>
        <div className="calc-form__date">
          <label className="calc-form__date-label">
            выезд<input className="calc-form__date-input" type="date"></input>
          </label>
        </div>
      </div>
    </form>
  );
};

export default CalcForm;
