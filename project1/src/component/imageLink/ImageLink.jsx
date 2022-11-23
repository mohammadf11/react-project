import React from 'react'
import './imageLink.css'
import  image  from '../../img/download.jpeg';
function ImageLink() {
  return (
    <div className='imageLink'>
      <img src={image} alt="" />
      <span>پرسش های متداول</span>
    </div>
  )
}

export default ImageLink
