import React from 'react'
import SliderHeadline from '../SliderHeadline'
import DesktopSlider from '../DesktopSlider'
import TabletSlider from '../TabletSlider'
import MobilSlider from '../MobilSlider'

const Slider = () => {
  return (
    
    <section id="slider">
      <div class="container">
        <SliderHeadline />
        <DesktopSlider />
        <TabletSlider />
        <MobilSlider />
    </div>
    </section>

  )
}

export default Slider