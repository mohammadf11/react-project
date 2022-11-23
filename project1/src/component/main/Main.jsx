import React from "react";
import "./main.css";
import img from "../../img/download.jpeg";
import img2 from "../../img/images.jpeg";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <div className="main">
      <div className="mainHeader">
        <i>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            style={{ fontSize: "40px" }}
          />
        </i>

        <span className="mainHeaderText">
          از ابتدای زمستان امسال کلیه ی کارکنان می توانند در خپاست های بازنشستگی
          خود ...
        </span>
        <i>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{ fontSize: "40px" }}
          />
        </i>
      </div>
      <div className="mainAuthorInfo">
        <img src={img2} alt="" />
        <span>نویسنده : محمد داوری - واحد فناوری اطلاعات</span>
      </div>
      <div className="mainImg"></div>
    </div>
  );
}

export default Main;
