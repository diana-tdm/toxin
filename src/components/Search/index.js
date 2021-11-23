import * as React from "react";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import PriceRange from "../UI/PriceRange";
import Checkbox from "../UI/Checkbox";
import Properties from "../UI/Properties";
import "./style.scss";

// markup
const Search = () => {
  return (
    <div className="search">
      <SelectDate />
      <SelectGuest />
      <PriceRange />
      <Checkbox />
      <Properties />
    </div>
  );
};

export default Search;
