import React from "react";
import "./MainNews.css";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picture from "../../img/download.jpeg";

function MainNews() {
  return (
    <div className="mainNews">
      <div className="mainNewsWrapper">
        <img src={picture} alt="" />
        <span className="mainNewsTitle">سالی که بر فولاد گذشت </span>
        <span className="mainNewsBody">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و سطرآنچنان که لازم است .
        </span>
        <div className="mainNewsComment">
          <span className="mainNewsCommentNumber">20</span>
          <i>
            <FontAwesomeIcon icon={faComment} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
