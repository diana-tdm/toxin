import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import "./style.scss";

// markup
const FooterAccordion = ({ title, links = [] }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="footer-accordion">
      <button
        type="button"
        className="footer-accordion__title"
        onClick={handleClick}
      >
        {title}
        <div
          className={`footer-accordion__icon ${
            open ? "footer-accordion__icon--active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </div>
      </button>
      <div
        className={`footer-accordion__links ${
          open ? "footer-accordion__links--open" : ""
        }`}
      >
        {links.map((link) => (
          <Link to="/mock-address/change-me" className="footer-accordion__link">
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterAccordion;
