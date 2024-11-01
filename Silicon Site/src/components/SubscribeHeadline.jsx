import React from 'react'
import NotificationBell from '../assets/images/notification-bell.svg'

const SubscribeHeadline = () => {
  return (
    <div className="title-wrapper">
    <img src={NotificationBell} alt="notification"/>
    <h4 className="headline-1">Subscribe to our newsletter to stay <br/> informed about latest updates</h4>

    <h4 className="headline-2">Subscribe to our <br/>
      newsletter </h4>
  </div>
  )
}

export default SubscribeHeadline