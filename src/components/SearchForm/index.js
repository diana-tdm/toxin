import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import SelectDate from "../UI/SelectDate";
import "./style.scss";

// markup
const SearchForm = () => {
  return (
    <form className="searchform">
      <h3 className="searchform__title">Найдём номера под ваши пожелания</h3>
      <SelectDate />
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
      <Link className="searchform__link" to="/search-room">
        <Button addClass="searchform__button">подобрать номер</Button>
      </Link>
    </form>
  );
};

export default SearchForm;
