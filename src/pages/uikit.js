import * as React from "react";
import Addcomfort from "../components/UI/Addcomfort";
import Button from "../components/UI/Button";
import Checkbox from "../components/UI/Checkbox";
import Comfort from "../components/UI/Comfort";
import EmailInput from "../components/UI/EmailInput";
import FooterAccordion from "../components/UI/FooterAccordion";
import LikeButton from "../components/UI/LikeButton";
import Pagination from "../components/UI/Pagination";
import PriceRange from "../components/UI/PriceRange";
import Properties from "../components/UI/Properties";
import RoomSlider from "../components/UI/RoomSlider";
import SelectBirthday from "../components/UI/SelectBirthday";
import SelectDate from "../components/UI/SelectDate";
import SelectGuest from "../components/UI/SelectGuest";
import Switch from "../components/UI/Switch";
import CalcForm from "../components/CalcForm";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import SearchForm from "../components/SearchForm";

// markup
const IndexPage = () => {
  return (
    <main>
      <div className="container">
        <Addcomfort />
        <Button />
        <Checkbox />
        <Comfort />
        <EmailInput />
        <FooterAccordion
          title="навигация"
          links={["О нас", "Новости", "Служба поддержки", "Услуги"]}
        />
        <LikeButton />
        <Pagination />
        <PriceRange />
        <Properties />
        <RoomSlider />
        <SelectBirthday />
        <SelectDate />
        <SelectGuest />
        <Switch />
        <CalcForm />
        <LoginForm />
        <RegistrationForm />
        <SearchForm />
      </div>
    </main>
  );
};

export default IndexPage;
