import React from "react";
import image from "../../img/download.jpeg";
import './news.css'

function News() {
  return (
    <div className="news">
      <div className="newsWrapper">
        <img src={image} alt="" />
        <span>وضعیت جهانی فولاد صادراتی</span>
      </div>
    </div>
  );
}

export default News;
