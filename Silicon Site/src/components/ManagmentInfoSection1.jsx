import React from 'react'
import CheckCircle from '../assets/images/Icons/bx-check-circle.png'
import ManagmentInfoBtn from './ManagmentInfoBtn'
import ManagementInfoSectionImage from './ManagementInfoSectionImage'

const ManagmentInfoSection1 = () => {
  return (

  <section className="features-1">
    <div className="container">

        <div className="managmentInfo">

          <h2>Make your money <br/> transfer simple and clear</h2>
          
            <div className="featuresList">
                <div className="feature-item">
                  <img src={CheckCircle} alt="Checkad cirkle"/>
                  <span>Banking transactions are free for you</span>
                </div>
                  
                
                <div className="feature-item">
                  <img src={CheckCircle} alt="Checkad cirkle"/>
                  <span>No monthly cash commission</span>
                </div>

                    
                <div className="feature-item">
                  <img src={CheckCircle} alt="Checkad cirkle"/>
                  <span>Manage payments and transactions online</span>
                </div>
              </div>
            <ManagmentInfoBtn />

        </div>
          <ManagementInfoSectionImage />
    </div>
  </section>


  )
}

export default ManagmentInfoSection1