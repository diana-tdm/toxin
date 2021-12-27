import * as React from "react";
import Button from "../UI/Button";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import JSONData from "../../content/data.json";
import "./style.scss";

// markup
const CalcForm = ({ id }) => {
  const [days, setDays] = React.useState(0);

  function changeDays(days) {
    setDays(days);
  }

  return (
    <form className="calc-form">
      <div className="calc-form__info">
        <div className="calc-form__number">
          <span className="calc-form__element">№</span>{" "}
          {JSONData.rooms[id - 1].number}{" "}
          {JSONData.rooms[id - 1]?.lux && (
            <span className="calc-form__type">люкс</span>
          )}
        </div>
        <div className="calc-form__price">
          {JSONData.rooms[id - 1].price.toLocaleString()}₽{" "}
          <span className="calc-form__time">в сутки</span>
        </div>
      </div>
      <SelectDate onChange={changeDays} />
      <SelectGuest />
      <div className="calc-form__services">
        <div className="calc-form__services-list">
          <div className="calc-form__services-text">
            {JSONData.rooms[id - 1].price.toLocaleString()}₽ х {days} суток
          </div>
          <div className="calc-form__services-price">
            {(JSONData.rooms[id - 1].price * days).toLocaleString()}₽
          </div>
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
          <div className="calc-form__services-total-price">
            {(
              JSONData.rooms[id - 1].price * days -
              2179 +
              300
            ).toLocaleString()}
            ₽
          </div>
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
