import React from "react";
import News from '../news/News';
import './archiveNews.css'

function ArchiveNews() {
  return (
    <div className="archiveNews">
      <div className="archiveNewsTitle">
        آرشیو اخبار
      </div>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
    </div>
  );
}

export default ArchiveNews;
