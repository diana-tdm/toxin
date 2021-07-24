import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

// markup
const LikeButton = () => {
  return (
    <button className="like-button">
      <FontAwesomeIcon icon={faHeart} />
      <span>12</span>
    </button>
  );
};

export default LikeButton;
