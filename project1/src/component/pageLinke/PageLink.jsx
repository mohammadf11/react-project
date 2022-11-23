import React from "react";
import './pageLink.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function PageLink() {
  return (
    <div className="pageLink">
      <i>
      <FontAwesomeIcon
        icon={faChevronCircleLeft}
        style={{ fontSize: "30px" }}
        />
      </i>
      <span>صفحه اصلی</span>
    </div>
  );
}

export default PageLink;
