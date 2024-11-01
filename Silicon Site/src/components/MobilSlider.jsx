import React from 'react'
import Mobil4 from '../assets/images/mobil-3-1000.svg'
import MobilBildSlider from '../assets/images/mobil-3_1mobil.svg'

const MobilSlider = () => {
  return (
    <div id="mobil-slider">
      <div className="bild-m-slider">
        <img src={MobilBildSlider} alt="Mobil Bild"/>
      </div>

      <div className="z-mobil-bild">
        <img src={Mobil4} alt=""/>
      </div>

      <div className="beskrivning-text">
        <h4>Transfers to people from <br/> your contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.</p>
      </div>
    </div>
  )
}

export default MobilSlider