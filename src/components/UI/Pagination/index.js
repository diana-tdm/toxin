import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <button className="pagination__button pagination__button--active">
          1
        </button>
        <button className="pagination__button">2</button>
        <button className="pagination__button">3</button>
        <div className="pagination__button">...</div>
        <button className="pagination__button">15</button>
        <button className="pagination__button pagination__button--arrow">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </button>
      </div>
      <div className="pagination__hint">1 – 12 из 100+ вариантов аренды</div>
    </div>
  );
};

export default Pagination;
