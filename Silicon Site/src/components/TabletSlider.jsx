import React from 'react'
import Mobil3 from '../assets/images/mobil-3-1100.svg'
import Mobil3Tablet from '../assets/images/mobil-3_tablet.svg'


const TabletSlider = () => {
  return (
   
    <div className="tablet">
      <div className="tablet-bild-slider">
        <img src={Mobil3Tablet} alt="Mobil Bild"/>
      </div>

      <div className="z-bild">
        <img src= {Mobil3} alt=""/>
      </div>


      <div className="beskrivning-text">
        <h4>Step 3. Transfers to people from your
          contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec
            lacus.</p>
      </div>
    </div>

  )
}

export default TabletSlider