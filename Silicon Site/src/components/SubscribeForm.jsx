import React from 'react'

const SubscribeForm = () => {
  return (
    <div className="input-group">
      <i className="fa-regular fa-envelope email-icon"></i>
      <input className="mail-input" type="email" placeholder="Your Email"/>
      <button className="subscribe-btn btn-primary">Subscribe</button>
    </div>
  )
}

export default SubscribeForm