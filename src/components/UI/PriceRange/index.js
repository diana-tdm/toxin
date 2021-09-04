import * as React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.scss";

// markup
const PriceRange = () => {
  const [value, setValue] = React.useState("");
  const onChange = () => {};

  return (
    <div className="price-range">
      <div className="price-range__items">
        <div className="price-range__title">диапазон цены</div>
        <div className="price-range__price">5 000₽ - 10 000₽</div>
      </div>
      <Range value={[20, 60]} />
      <div className="price-range__text">
        Стоимость за сутки пребывания в номере
      </div>
    </div>
  );
};

export default PriceRange;
