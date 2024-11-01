import React from 'react'
import PhoneIcon from '../assets/images/Icons/phone-icon.svg'
import MessageIcon from '../assets/images/Icons/message-icon.svg'

const FaqIcons = () => {
  return (
    <div className="icon-wrapper">
      <div className="icon-box">
        <img src={PhoneIcon} alt="contact"/>
        <span>Still have  questions?</span>
        <a href="#">Contack us <i className="fa-solid fa-arrow-right"></i></a>
      </div>


      <div className="icon-box">
        <img src={MessageIcon} alt="contact"/>
        <span>Don't like phone calls?</span>
        <a id="message-contact" href="#">Contack us <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      
      <div className="contact-us">
        <a className="btn-primary contact-us-now" href="#">Contact us now</a>
      </div>

    </div>
  )
}

export default FaqIcons