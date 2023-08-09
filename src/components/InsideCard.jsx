import React from 'react'
import "../styles/insidecard.css"
import ImgMobile from '../assets/illustration-sign-up-mobile.svg'
import imgList from '../assets/icon-list.svg'
import ImgDesktop from '../assets/illustration-sign-up-desktop.svg'
import Email from './Email'
function InsideCard() {
  
  return (

    <div className='card'>    <div className='InsideCard-div'>
      <div className="img-div">
        <img className='ImgMobile' src={ImgMobile} alt="" />
        <img className='ImgDesktop' src={ImgDesktop} alt="" />
      </div>
      <div className='text-div'>
        <h1>Stay updated!</h1>
        <p className='join'>Join 60,000+ product managers receiving monthly updates on: </p>
        <ul>
          <li> <img className='img-list' src={imgList} alt="" />imgProduct discovery and building what matters</li>
          <li><img className='img-list' src={imgList} alt="" />Measuring to ensure updates are a success </li>
          <li> <img className='img-list' src={imgList} alt="" />And much more!</li>
        </ul>
        <div className='input-btn-div'>

         <Email/>
        </div>
      </div>
    </div></div>
  )
}

export default InsideCard