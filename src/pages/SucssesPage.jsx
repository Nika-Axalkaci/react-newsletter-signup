import React from 'react'
import icon from '../assets/icon-success.svg'
import '../styles/sucssesfull.css'
import { Link, useLocation } from 'react-router-dom'
const SucssesPage = () => {
const location = useLocation()

  return (
    <div className='sucsses-card'>
      
      <div className='main-sucss'>
        <div className='sucsees-img'>
        <img src={icon} alt="sucssesCheck" />
      </div>
      <div className='sucsees-text'>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to {location.state.email}. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <Link to={'/'}><button className='sucsees-btn'>Dismiss message</button></Link></div>
     </div>
  )
}

export default SucssesPage