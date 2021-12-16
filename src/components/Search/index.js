import * as React from "react";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import PriceRange from "../UI/PriceRange";
import Checkbox from "../UI/Checkbox";
import Properties from "../UI/Properties";
import Comfort from "../UI/Comfort";
import Addcomfort from "../UI/Addcomfort";
import Button from "../UI/Button";
import "./style.scss";

// markup
const Search = () => {
  const [show, setShow] = React.useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div className="search">
      <Button addClass="search__toggle" onClick={toggle}>
        Фильтр
      </Button>
      <div className={`search__list ${show ? "search__list--show" : ""}`}>
        <SelectDate secondary />
        <SelectGuest secondary />
        <PriceRange />
        <Checkbox />
        <Properties />
        <Comfort />
        <Addcomfort />
      </div>
    </div>
  );
};

export default Search;
