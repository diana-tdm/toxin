import * as React from "react";
import "./style.scss";

// markup
const Switch = ({ children }) => {
  const [active, setActive] = React.useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <label className="switch__label">
      <button
        className={`switch__border ${active ? "switch__border--active" : ""}`}
        type="button"
        onClick={toggle}
      >
        <div
          className={`switch__circle ${active ? "switch__circle--active" : ""}`}
        ></div>
      </button>
      {children}
    </label>
  );
};

export default Switch;
