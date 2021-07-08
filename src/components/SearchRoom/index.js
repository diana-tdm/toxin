import * as React from "react";
import Rooms from "../Rooms";
import Search from "../Search";
import "./style.scss";

// markup
const SearchRoom = () => {
  return (
    <section className="search-room">
      <div className="container container__search-room">
        <Search />
        <Rooms />
      </div>
    </section>
  );
};

export default SearchRoom;
