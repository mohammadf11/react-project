import React from "react";
import "./profile.css";
import profile from '../../img/images.jpeg';

function Profile() {
  return (
    <div className="profile">
      <div className="profileWrapper">
        <span className="profileTitle">تصویر و مشخصات پرسنلی</span>
        <img src={profile} alt=""  className="profileImg"/>
        <div className="profileInfo">
            <span className="profileInfoName">افشین جمشاد</span>
            <span className="profileInfoCode">کد پرسنلی :۲۳۰۹۷</span>
            <button className="profileInfoBtn">پروفایل من</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
