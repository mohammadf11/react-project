import React from "react";
import './header.css'
import image from '../../img/images.png'

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerRight">
          <span className="headerRightTop">
            دریافت کسر اقساط وکلیه امور بازنشستگان در سایت
          </span>
          <span className="headerRightCenter">
            از ابتدای زمستان امسال کلیه کارکنان میتوانند کلیه ی درخواست های
            بازنشستگی خود را به صورت الکترونیکی
          </span>
          <span className="headerRightBottom">
            سه روز قبل
          </span>
        </div>
        <div className="headerLeft">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
