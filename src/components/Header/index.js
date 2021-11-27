import * as React from "react";
import Logo from "../../images/main/logo-header.svg";
import Button from "../UI/Button";
import "./style.scss";

// markup
const Header = () => {
  return (
    <header className="header">
      <div className="container container__header">
        <a href="/">
          <img src={Logo} alt="logo-header" />
        </a>
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
          <Button secondary addClass="header__mr20">
            войти
          </Button>
          <Button>зарегистрироваться</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
