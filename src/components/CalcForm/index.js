import * as React from "react";
import Button from "../UI/Button";

import "./style.scss";

// markup
const CalcForm = () => {
  return (
    <form className="calc-form">
      <div className="calc-form__info">
        <div className="calc-form__number">
          <span className="calc-form__element">№</span> 888{" "}
          <span className="calc-form__type">люкс</span>
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
      <label className="calc-form__date-label">
        гости
        <select className="calc-form__select">
          <option value="" disabled selected>
            Сколько гостей
          </option>
          <option value="1">1 гость</option>
          <option value="2">2 гостя</option>
          <option value="2">3 гостя</option>
        </select>
      </label>
      <div className="calc-form__services">
        <div className="calc-form__services-list">
          <div className="calc-form__services-text">9 990₽ х 4 суток</div>
          <div className="calc-form__services-price">39 960₽</div>
        </div>
        <div className="calc-form__services-list">
          <div className="calc-form__services-text">
            Сбор за услуги: скидка 2 179₽
          </div>
          <div className="calc-form__services-items">
            <div className="calc-form__services-icon">i</div>
            <div className="calc-form__services-price">0₽</div>
          </div>
        </div>
        <div className="calc-form__services-list">
          <div className="calc-form__services-text">
            Сбор за дополнительные услуги
          </div>
          <div className="calc-form__services-items">
            <div className="calc-form__services-icon">i</div>
            <div className="calc-form__services-price">300₽</div>
          </div>
        </div>
        <div className="calc-form__services-total">
          <div className="calc-form__services-total-text">Итого</div>
          <div className="calc-form__services-total-border"></div>
          <div className="calc-form__services-total-price">38 081₽</div>
        </div>
      </div>
      <div className="calc-form__button">
        <Button arrow addClass="calc-form__button-arrow">
          забронировать
        </Button>
      </div>
    </form>
  );
};

export default CalcForm;
