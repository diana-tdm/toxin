import * as React from "react";
import Button from "../UI/Button";
import "./style.scss";

// markup
const SearchForm = () => {
  return (
    <form>
      <h3 className="searchform__title">Найдём номера под ваши пожелания</h3>
      <div className="searchform__dates">
        <div className="searchform__date">
          <label>
            прибытие<input type="date"></input>
          </label>
        </div>
        <div className="searchform__date">
          <label>
            выезд<input type="date"></input>
          </label>
        </div>
      </div>
      <label>
        гости
        <select value="Сколько гостей">
          <option>1</option>
        </select>
      </label>
      <Button>подобрать номер</Button>
    </form>
  );
};

export default SearchForm;
