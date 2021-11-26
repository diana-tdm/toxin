import * as React from "react";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import PriceRange from "../UI/PriceRange";
import Checkbox from "../UI/Checkbox";
import Properties from "../UI/Properties";
import Comfort from "../UI/Comfort";
import "./style.scss";

// markup
const Search = () => {
  return (
    <div className="search">
      <SelectDate secondary />
      <SelectGuest secondary />
      <PriceRange />
      <Checkbox />
      <Properties />
      <Comfort />
    </div>
  );
};

export default Search;
