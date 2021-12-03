import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../images/main/logo-header.svg";
import Button from "../UI/Button";
import "./style.scss";

// markup
const Header = () => {
  return (
    <header className="header">
      <div className="container container__header">
        <Link to="/">
          <img src={Logo} alt="logo-header" />
        </Link>
        <div className="header__nav">
          <nav>
            <ul>
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
            <Button secondary>войти</Button>
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
