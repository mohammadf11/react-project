import React from "react";
import "./feed.css";
import Profile from "../profile/Profile";
import SiteLink from "../siteLink/SiteLink";
import ArchiveNews from "../archiveNews/ArchiveNews";
import PageLink from "../pageLinke/PageLink";
import PageLinks from "../pageLinks/PageLinks";
import ImageLinks from "../imageLinks/ImageLinks";
import BannerImg from "../../img/banner2.jpeg";
import picture from "../../img/p1.png";
import NoticeArchive from "../NoticeArchive/NoticeArchive";
import Main from "../main/Main";
import MainNews from '../mainNews/MainNews';

function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="feedWrapperRight">
          <div className="feedProfile">
            <Profile />
          </div>
          <div className="feedArchiveNews">
            <ArchiveNews />
          </div>
          <div className="feedSiteLink">
            <SiteLink />
          </div>
        </div>
        <div className="feedWrapperCenter">
          <div className="feedWrapperCenterNews">
            <div className="feedWrapperCenterNewsTop">
              <Main />
            </div>
            <div className="feedWrapperCenterNewsBottom">
              <MainNews/>
              <MainNews/>
              <MainNews/>
            </div>
          </div>
          <div className="feedWrapperCenterArchiveNews">
            <div className="feedWrapperCenterArchiveNewsRight">
              <NoticeArchive />
            </div>
            <div className="feedWrapperCenterArchiveNewsLeft">
              <span className="title">استراتژی و اهداف</span>
              <span className="body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد
              </span>
            </div>
          </div>
        </div>
        <div className="feedWrapperLeft">
          <div className="feedPageLinks">
            <PageLinks />
          </div>
          <div className="feedImageLinks">
            <ImageLinks />
          </div>
          <div className="feedBanner">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
