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
                <a href="">О нас</a>
              </li>
              <li className="header__link">
                <a href="">Услуги</a>
              </li>
              <li className="header__link">
                <a href="">Вакансии</a>
              </li>
              <li className="header__link">
                <a href="">Новости</a>
              </li>
              <li className="header__link">
                <a href="">Соглашения</a>
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
