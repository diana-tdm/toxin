import * as React from "react";
import "./style.scss";

// markup
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__link">
          <div className="footer__logo"></div>
          <div className="footer__nav">
            <h4>навигация</h4>
            <a>О нас</a>
            <a>Новости</a>
            <a>Служба поддержки</a>
            <a>Услуги</a>
          </div>
          <div className="footer__nav">
            <h4>навигация</h4>
            <a>О нас</a>
            <a>Новости</a>
            <a>Служба поддержки</a>
            <a>Услуги</a>
          </div>
          <div className="footer__nav">
            <h4>навигация</h4>
            <a>О нас</a>
            <a>Новости</a>
            <a>Служба поддержки</a>
            <a>Услуги</a>
          </div>
          <div className="footer__mail">
            <h4>Подписка</h4>
            <p>Получайте специальные предложения и новости сервиса</p>
          </div>
        </div>
        <div className="footer__social"></div>
      </div>
    </footer>
  );
};

export default Footer;
