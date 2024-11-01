import React from 'react'
import AppleStore from '../assets/images/appleStore.svg'
import GooglePlay from '../assets/images/googlePlay.svg'


const BtnDownloadApp = () => {
  return (
      <div className="buttons">
        <a className="btn-download-app" href="#"><img src={AppleStore} alt="Apple Icon"/></a>
        <a className="btn-download-app" href="#"><img src= {GooglePlay} alt="google Icon"/></a>
      </div>
  )
}

export default BtnDownloadApp