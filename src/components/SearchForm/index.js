import * as React from "react";
import Button from "../UI/Button";
import "./style.scss";

// markup
const SearchForm = () => {
  return (
    <form className="searchform">
      <h3 className="searchform__title">Найдём номера под ваши пожелания</h3>
      <div className="searchform__dates">
        <div className="searchform__date">
          <label className="searchform__date-label">
            прибытие
            <input className="searchform__date-input" type="date"></input>
          </label>
        </div>
        <div className="searchform__date">
          <label className="searchform__date-label">
            выезд<input className="searchform__date-input" type="date"></input>
          </label>
        </div>
      </div>
      <label className="searchform__date-label">
        гости
        <select className="searchform__select">
          <option value="" disabled selected>
            Сколько гостей
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <Button addClass="searchform__button">подобрать номер</Button>
    </form>
  );
};

export default SearchForm;
