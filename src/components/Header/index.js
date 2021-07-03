import * as React from "react";
import Logo from "../../images/main/logo-header.svg";
import "./style.css";

// markup
const Header = () => {
  return (
    <header className="header">
      <div className="container container__header">
        <img src={Logo} alt="logo-header" />
        <div className="header_nav">
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
          <button className="header__button">войти</button>
          <button className="header__button header__button--blue">
            зарегистрироваться
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
