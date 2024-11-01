import React from 'react'
import FeatureMobilImage from '../FeatureMobilImage'
import FeatureHeadline from '../FeatureHeadline'
import FeatureListItems from '../FeatureListItems'

const Feature = () => {
  return (
    <section id="features">
      <div className="container">
        <FeatureMobilImage />
        
        <div className="features-box">
          <FeatureHeadline />
          <FeatureListItems />
        </div>
      
      </div>
    </section>
  )
}

export default Feature
    {/* <section id="features">
    <div className=Name=ame="container">
      <FeatureMobilImage />
      <FeatureHeadline />
      <FeatureListItems />
    </div>
  </section> */}