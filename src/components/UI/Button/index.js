import * as React from "react";
import "./style.scss";

// markup
const Button = ({ children, secondary, addClass }) => {
  return (
    <button
      className={`button ${addClass} ${secondary ? "button--secondary" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
