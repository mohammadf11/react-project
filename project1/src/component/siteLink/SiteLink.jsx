import React from 'react'
import './SiteLink.css'
import  image1  from '../../img/siteimg1.jpeg';
import image2  from '../../img/siteimg2.jpeg';

function SiteLink() {
  return (
    <div className='SiteLink'>
        <span >لینک سایت ها</span>
        <img src={image1} alt="" />
        <img src={image1} alt="" />
        <img src={image2} alt="" />
    </div>
  )
}

export default SiteLink