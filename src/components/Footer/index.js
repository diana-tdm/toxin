import * as React from "react";
import Logo from "../../images/main/logo-header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import EmailInput from "../UI/EmailInput";
import FooterAccordion from "../UI/FooterAccordion";
import "./style.scss";

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
            <div className="footer__accordion">
              <FooterAccordion
                title="навигация"
                links={["О нас", "Новости", "Служба поддержки", "Услуги"]}
              />
              <FooterAccordion
                title="о нас"
                links={["О сервисе", "Наша команда", "Вакансии", "Инвесторы"]}
              />
              <FooterAccordion
                title="Служба поддержки"
                links={["Соглашения", "Сообщества", "Связь с нами"]}
              />
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
          <div>
            <span className="footer__social-text">
              Copyright © 2018 Toxin отель.
            </span>
            <span className="footer__social-text"> Все права зачищены.</span>
          </div>
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
