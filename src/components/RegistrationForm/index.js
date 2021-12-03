import * as React from "react";
import { Link } from "gatsby";
import Button from "../UI/Button";
import Switch from "../UI/Switch";
import SelectBirthday from "../UI/SelectBirthday";
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
      <div className="registration-form__sex">
        <label className="registration-form__radio-label">
          <input
            className="registration-form__radio"
            type="radio"
            name="sex"
            value="male"
            defaultChecked
          ></input>
          Мужчина
        </label>
        <label className="registration-form__radio-label">
          <input
            className="registration-form__radio"
            type="radio"
            name="sex"
            value="female"
          ></input>
          Женщина
        </label>
      </div>
      <SelectBirthday />
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
        <Link to="/login">
          <Button secondary>войти</Button>
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
