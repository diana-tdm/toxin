import * as React from "react";
import Logo from "../../images/main/logo-header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";
import EmailInput from "../UI/EmailInput";

// markup
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer__link">
            <div className="footer__logo">
              <img className="footer__img" src={Logo} alt="logo-header" />
              <p className="footer__text">
                Бронирование номеров в лучшем отеле 2019 года по версии
                ассоциации «Отельные взгляды»
              </p>
            </div>
            <div className="footer__nav">
              <h4 className="footer__title">навигация</h4>
              <a className="footer__link-item">О нас</a>
              <a className="footer__link-item">Новости</a>
              <a className="footer__link-item">Служба поддержки</a>
              <a className="footer__link-item">Услуги</a>
            </div>
            <div className="footer__nav">
              <h4 className="footer__title">о нас</h4>
              <a className="footer__link-item">О сервисе</a>
              <a className="footer__link-item">Наша команда</a>
              <a className="footer__link-item">Вакансии</a>
              <a className="footer__link-item">Инвесторы</a>
            </div>
            <div className="footer__nav">
              <h4 className="footer__title">Служба поддержки</h4>
              <a className="footer__link-item">Соглашения</a>
              <a className="footer__link-item">Сообщества</a>
              <a className="footer__link-item">Связь с нами</a>
            </div>
            <div className="footer__mail">
              <h4 className="footer__title">Подписка</h4>
              <p className="footer__text">
                Получайте специальные предложения и новости сервиса
              </p>
              <EmailInput />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__social">
          <div>Copyright © 2018 Toxin отель. Все права зачищены.</div>
          <div className="footer__icons">
            <a className="footer__icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a className="footer__icon">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <a className="footer__icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
