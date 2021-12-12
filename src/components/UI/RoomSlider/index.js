import * as React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./style.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

// markup
const RoomSlider = ({ id }) => {
  const [nextSlide, setNextSlide] = React.useState(1);
  const [prevSlide, setPrevSlide] = React.useState(3);

  function changeSlide(e) {
    console.log(e);
    setNextSlide((e.nextIndex + 1) % 4);
    setPrevSlide((e.nextIndex + 3) % 4);
  }

  return (
    <div className="room-slider">
      <div className="room-slider__main">
        <AutoplaySlider
          play={true}
          interval={3000}
          onTransitionStart={changeSlide}
        >
          <div data-src={`/images/room-slider01.jpg`} />
          <div data-src={`/images/room-slider02.jpg`} />
          <div data-src={`/images/room-slider03.jpg`} />
          <div data-src={`/images/room-slider04.jpg`} />
        </AutoplaySlider>
      </div>
      <div className="room-slider__small">
        <div>
          <AwesomeSlider selected={nextSlide} play={false}>
            <div data-src={`/images/room-slider01.jpg`} />
            <div data-src={`/images/room-slider02.jpg`} />
            <div data-src={`/images/room-slider03.jpg`} />
            <div data-src={`/images/room-slider04.jpg`} />
          </AwesomeSlider>
        </div>
        <div>
          <AwesomeSlider selected={prevSlide} play={false}>
            <div data-src={`/images/room-slider01.jpg`} />
            <div data-src={`/images/room-slider02.jpg`} />
            <div data-src={`/images/room-slider03.jpg`} />
            <div data-src={`/images/room-slider04.jpg`} />
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default RoomSlider;
