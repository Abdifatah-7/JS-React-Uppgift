import React from 'react'
import BackBild from '../assets/images/backBild-1.svg'
import FramBild from '../assets/images/framBild-1.svg'

const ManagementInfoSectionImage = () => {
  return (

    <div className="features-2-bild1">
      <img src={BackBild} alt="Statistics bild."/>
      <div className="features-2-bild2">
        <img src={FramBild} alt="emoji bild"/>
      </div>
    </div> 

  )
}

export default ManagementInfoSectionImage