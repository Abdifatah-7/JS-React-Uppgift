import React from 'react'
import BankCardImage from '../assets/images/bankCard.svg'
import PaymentIconImage from '../assets/images/Icons/payment-icon.svg'
import CashBackIconImage from '../assets/images/Icons/cashback-icon.svg'
import ManagmentInfoBtn from './ManagmentInfoBtn'

const ManagementInfoSection2 = () => {
  return (
    <section className="features-2">
      <div className="container">

          <div className="bild-kolumn">
              <img src={BankCardImage} alt="Bank kort."/>
            </div>

            <div className="info">
                <h2>Receive payment from <br/> international bank details</h2>

                <div className="paymentInfo">
                  
              <div className="paymentInfo-item">
                <img src={PaymentIconImage} alt=""/>
                <span>Manage your payments online. Mollis congue egestas egestas fermentum fames.</span>
              </div>

              <div className="paymentInfo-item">
                <img src={CashBackIconImage} alt="plånbok."/>
                <span>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</span>
              </div>

              <ManagmentInfoBtn />

              </div>

        </div>

      </div>
  </section>
  )
}

export default ManagementInfoSection2