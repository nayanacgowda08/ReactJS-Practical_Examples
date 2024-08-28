import React from 'react'
import './ImageGallery.css'
import img1 from "../../image/ig.avif"
import img2 from "../../image/img2.avif"
import img3 from "../../image/img3.avif"
import img4 from "../../image/img4.avif"
import img5 from "../../image/img5.avif"
import img6 from "../../image/img6.avif"
import img7 from "../../image/img7.avif"
import img8 from "../../image/img8.avif"
// import img9 from "../../image/img9.avif"


function ImageGallery() {
  return (
    <>
        <div className='gallery'> 
        <img src={img1} alt="" />
        <img src={img2} alt=""/>
        <img src={img3} alt="" />
        <img src={img4} alt=""/>
        <img src={img5} alt="" />
        <img src={img6} alt=""/>
        <img src={img7} alt=""/>
        <img src={img8} alt=""/>
        {/* <img src={img9} alt=""/> */}
        </div>
    </>
  )
}

export default ImageGallery