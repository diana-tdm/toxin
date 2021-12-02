import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import Switch from "../UI/Switch";
import "./style.scss";

// markup
const RegistrationForm = () => {
  return (
    <form className="registration-form" action="">
      <div className="registration-form__title">Регистрация аккаунта</div>
      <input
        className="registration-form__input"
        type="text"
        placeholder="Имя"
      ></input>
      <input
        className="registration-form__input"
        type="text"
        placeholder="Фамилия"
      ></input>
      <div className="registration-form__subtitle">дата рождения</div>
      <input
        className="registration-form__input"
        type="text"
        placeholder="ДД.ММ.ГГГГ"
      ></input>
      <div className="registration-form__subtitle">
        данные для входа в сервис
      </div>
      <input
        className="registration-form__input"
        type="email"
        placeholder="Email"
      ></input>
      <input
        className="registration-form__input"
        type="password"
        placeholder="Пароль"
      ></input>
      <div className="registration-form__switch">
        <Switch>Получать спецпредложения</Switch>{" "}
      </div>
      <Button arrow>перейти к оплате</Button>
      <div className="registration-form__login">
        <div>Уже есть аккаунт на Toxin</div>
        <Button secondary>войти</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
