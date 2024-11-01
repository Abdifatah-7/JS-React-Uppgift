import React from 'react'
import BtnDownloadApp from './BtnDownloadApp'
import BtnCirkel from './BtnCirkel'

const HeroContent = () => {
  return (
      <>
        <div className="headline">
          <h1>Manage All Your <br/> Money in One App</h1>
        </div>

        <div className="content">
          <p>We offer you a new generation of the mobile banking. <br/> Save, spend & manage money in your pocket.</p>
          <BtnDownloadApp />
          <BtnCirkel />
        </div>
      
      </>
  )
}

export default HeroContent