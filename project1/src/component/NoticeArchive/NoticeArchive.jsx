import React from "react";
import "./noticeArchive.css";
import ImageLink from "../imageLink/ImageLink";
import News from "../news/News";

function NoticeArchive() {
  return (
    <div className="noticeArchive">
      <div className="noticeArchiveTitle"> آرشیو اطلاعیه های سازمان</div>
      <div className="noticeArchiveBox">
        <div className="noticeArchiveRight">
          <News />
          <News />
          <News />
          <News />
        </div>
        <div className="noticeArchiveLeft">
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>
    </div>
  );
}

export default NoticeArchive;
