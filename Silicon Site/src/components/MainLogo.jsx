import React from 'react'
import LogoBild from '../assets/images/silicon-logo.svg'

const MainLogo = () => {
  return (
    <a id="logo" href="index-light.html"> <img className='logo' src={LogoBild} alt="logo"/></a>
  )
}

export default MainLogo