import * as React from "react";
import "./style.scss";

// markup
const Switch = ({ children }) => {
  return (
    <label className="switch__label">
      <button className="switch__border">
        <div className="switch__circle"></div>
      </button>
      {children}
    </label>
  );
};

export default Switch;
