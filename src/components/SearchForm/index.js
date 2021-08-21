import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import "./style.scss";

// markup
const SearchForm = () => {
  return (
    <form className="searchform" action="">
      <h3 className="searchform__title">Найдём номера под ваши пожелания</h3>
      <SelectDate />
      <SelectGuest />
      <Link className="searchform__link" to="/search-room">
        <Button addClass="searchform__button">подобрать номер</Button>
      </Link>
    </form>
  );
};

export default SearchForm;
