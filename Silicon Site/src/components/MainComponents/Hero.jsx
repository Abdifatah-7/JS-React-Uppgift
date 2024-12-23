import React from 'react'
import HeroContent from '../HeroContent'
import HeroImage from '../HeroImage'
import SectionBrands from '../SectionBrands'



const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <HeroContent />
          <HeroImage />
        </div>
      </section>

        <SectionBrands />
    </>
  )
}

export default Hero