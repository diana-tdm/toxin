import * as React from "react";
import LikeButton from "../UI/LikeButton";
import "./style.scss";

// markup
const Review = () => {
  return (
    <div className="review">
      <div className="review__image-like">
        <img className="review__image" src="/images/avatars/01.png" />
        <LikeButton />
      </div>
      <div className="review__content">
        <div className="review__name">Мурад Сарафанов</div>
        <div className="review__date">5 дней назад</div>
        <div className="review__text">
          Великолепный матрас на кровати в основной спальне! А пуфик вообще
          потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал
          комплименты повару — никто не жаловался из соседей.
        </div>
      </div>
    </div>
  );
};

export default Review;
