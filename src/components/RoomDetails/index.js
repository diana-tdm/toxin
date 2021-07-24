import * as React from "react";
import RoomBanner from "../RoomBanner";
import RoomInfo from "../RoomInfo";
import Review from "../Review";
import "./style.scss";

// markup
const RoomDetails = () => {
  return (
    <>
      <div>
        <RoomBanner />
      </div>
      <div className="container container__room-details">
        <div className="room-details__info">
          <RoomInfo />
          <div className="room-details__review">
            <h4 className="room-details__review-title">
              Отзывы посетителей номера
            </h4>
            <div className="room-details__review-count">2 отзыва</div>
          </div>
          <Review />
          <Review />
          <div className="room-details__rules-revoke">
            <div className="room-details__rules">
              <h4 className="room-details__title">Правила</h4>
              <ul className="room-details__rules-list">
                <li className="room-details__rules-list-item">
                  Нельзя с питомцами
                </li>
                <li className="room-details__rules-list-item">
                  Без вечеринок и мероприятий
                </li>
                <li className="room-details__rules-list-item">
                  Время прибытия — после 13:00, а выезд до 12:00
                </li>
              </ul>
            </div>

            <div className="room-details__revoke">
              <h4 className="room-details__title">Отмена</h4>
              <p className="room-details__text">
                Бесплатная отмена в течение 48 ч. После этого при отмене не
                позднее чем за 5 дн. до прибытия вы получите полный возврат за
                вычетом сбора за услуги.
              </p>
            </div>
          </div>
        </div>

        <div className="room-details__form"></div>
      </div>
    </>
  );
};

export default RoomDetails;
