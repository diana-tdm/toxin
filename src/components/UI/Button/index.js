import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const Button = ({
  children,
  secondary,
  arrow,
  addClass,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${addClass} ${secondary ? "button--secondary" : ""} ${
        arrow ? "button--arrow" : ""
      }`}
    >
      {children}
      {arrow && (
        <div className="button__arrow">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </div>
      )}
    </button>
  );
};

export default Button;
