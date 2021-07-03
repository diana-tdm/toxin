import * as React from "react";
import "./style.css";

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
