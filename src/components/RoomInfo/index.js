import * as React from "react";
import RoomComfort from "../RoomComfort";
import "./style.scss";

// markup
const RoomInfo = ({ id }) => {
  return (
    <div className="room-info">
      <div className="room-info__items">
        <div className="room-info__comfort">
          <h4 className="room-info__title">Сведения о номере</h4>
          <RoomComfort />
          <RoomComfort />
          <RoomComfort />
        </div>
        <div className="room-info__rating">
          <h4 className="room-info__title">Впечатления от номера</h4>
          <div className="room-info__chart-legend">
            <div className="room-info__chart">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 120 120"
                class="donut"
              >
                <circle
                  class="donut-hole"
                  cx="60"
                  cy="60"
                  r="56"
                  fill="#fff"
                ></circle>
                <circle
                  class="donut-segment"
                  cx="60"
                  cy="60"
                  r="56"
                  fill="transparent"
                  stroke="#FFBA9C"
                  stroke-width="4"
                  stroke-dasharray="173 175"
                  stroke-dashoffset="-87"
                ></circle>
                <circle
                  class="donut-segment"
                  cx="60"
                  cy="60"
                  r="56"
                  fill="transparent"
                  stroke="#6FCF97"
                  stroke-width="4"
                  stroke-dasharray="85 265"
                  stroke-dashoffset="0"
                ></circle>
                <circle
                  class="donut-segment"
                  cx="60"
                  cy="60"
                  r="56"
                  fill="transparent"
                  stroke="#BC9CFF"
                  stroke-width="4"
                  stroke-dasharray="85 265"
                  stroke-dashoffset="87"
                ></circle>
              </svg>
              <div className="room-info__chart-hint">
                <div className="room-info__chart-number">260</div>
                <div className="room-info__chart-text">голосов</div>
              </div>
            </div>
            <ul className="room-info__legend">
              <li className="room-info__legend-item">Великолепно</li>
              <li className="room-info__legend-item room-info__legend-item--good">
                Хорошо
              </li>
              <li className="room-info__legend-item room-info__legend-item--normal">
                Удовлетворительно
              </li>
              <li className="room-info__legend-item room-info__legend-item--bad">
                Разочарован
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="room-info__reviews"></div>
      <div className="room-info__rules"></div>
    </div>
  );
};

export default RoomInfo;
