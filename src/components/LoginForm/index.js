import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import SelectDate from "../UI/SelectDate";
import SelectGuest from "../UI/SelectGuest";
import Switch from "../UI/Switch";
import SelectBirthday from "../UI/SelectBirthday";
import "./style.scss";

// markup
const LoginForm = () => {
  return (
    <form className="login-form" action="">
      <div className="login-form__title">Войти</div>
      <input
        className="login-form__input"
        type="email"
        placeholder="Email"
      ></input>
      <input
        className="login-form__input"
        type="password"
        placeholder="Пароль"
      ></input>
      <Button arrow>войти</Button>
      <div className="login-form__login">
        <div>Нет аккаунта на Toxin?</div>
        <Link to="/registration">
          <Button secondary>создать</Button>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
