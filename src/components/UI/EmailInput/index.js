import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const EmailInput = ({ children, secondary, addClass }) => {
  return (
    <div className="email-input">
      <input
        className="email-input__input"
        type="email"
        placeholder="Email"
      ></input>
      <button className="email-input__button">
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </button>
    </div>
  );
};

export default EmailInput;
