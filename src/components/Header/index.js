import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/main/logo-header.svg";
import Button from "../UI/Button";
import "./style.scss";

// markup
const Header = () => {
  const [show, setShow] = React.useState(false);

  function onClick() {
    setShow(!show);
  }

  return (
    <header className="header">
      <div className="header__overflow"></div>
      <div className="container container__header">
        <Link to="/">
          <img src={Logo} alt="logo-header" />
        </Link>
        <button class="header__btn" onClick={onClick}>
          <span></span>
        </button>
        <div className={`header__nav ${show ? "" : "header__nav--hide"}`}>
          <nav>
            <ul className="header__menu">
              <li className="header__link">
                <Link to="/mock-address/change-me">О нас</Link>
              </li>
              <li className="header__link">
                <Link to="/mock-address/change-me">Услуги</Link>
              </li>
              <li className="header__link">
                <Link to="/mock-address/change-me">Вакансии</Link>
              </li>
              <li className="header__link">
                <Link to="/mock-address/change-me">Новости</Link>
              </li>
              <li className="header__link">
                <Link to="/mock-address/change-me">Соглашения</Link>
              </li>
            </ul>
          </nav>
          <Link to="/login" className="header__mr20">
            <Button addClass="header__full-width" secondary>
              войти
            </Button>
          </Link>
          <Link to="/registration">
            <Button>зарегистрироваться</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
