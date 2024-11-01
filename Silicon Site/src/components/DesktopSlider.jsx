import React from 'react'
import VänsterBild from '../assets/images/mobil-3-vänster_desktop.svg'
import MittenBild from '../assets/images/mobil-3-mitten_desktop.svg'
import HögerBild from '../assets/images/mobil-3-höger_desktop.svg'


const DesktopSlider = () => {
  return (
    <div className="desktop">
    <div className="desktop-bild-slider">
      <img src= {VänsterBild} alt="mobil Bild"/>
      <img src= {MittenBild} alt="mobil Bild"/>
      <img src={HögerBild} alt="mobil Bild"/>

    </div>

    <div className="beskrivning-text">
      <h4>Latest transaction history</h4>
      <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br/>quisque hac in consectetur condimentum. </p>
    </div>

  </div>
  )
}

export default DesktopSlider