import React from "react";
import "./topbar.css";
import { faHome, faComment, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
          <div className="topbarRight">پورتال جامع مجتع فولاد</div>
          <div className="topbarCenter">
            <a href="">مقالات سازمانی</a>
            <a href="">پرسش و پاسخ</a>
            <a href="">دفترچه خاطرات </a>
            <a href="">آرشیو بازنشسگان</a>
          </div>
          <div className="topbarLeft">
            <FontAwesomeIcon icon={faHome} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
    </div>
  );
}

export default Topbar;
