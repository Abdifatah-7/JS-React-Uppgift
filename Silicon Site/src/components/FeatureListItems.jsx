import React from 'react'
import PaymentIcon from '../assets/images/Icons/payment-icon.svg'
import SecurityIcon from '../assets/images/Icons/security-icon.svg'
import Statistics from '../assets/images/Icons/statistics-icon.svg'
import Support from '../assets/images/Icons/support-icon.svg'
import Cashback from '../assets/images/Icons/cashback-icon.svg'
import Standards from '../assets/images/Icons/standards-icon.svg'

const FeatureListItems = () => {
  return (
    <div className="features-box">
    <div className="feature-list">
     
     <div id="payment" className="feature-box">
       <div className="feature-icon">
         <img src={PaymentIcon} alt="Bankkort Icon"/>
       </div>
       <div className="feature-text">
         <h3>Easy Payment</h3>
         <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
       </div>
     </div>

       <div id="security" className="feature-box">
         <div className="feature-icon">
           <img src={SecurityIcon} alt="Security Icon"/>
         </div>
           <div className="feature-text">
             <h3>Data Security</h3>
             <p>Augue pulvinar justo, fermentum
               fames aliquam accumsan vestibulum
               non.</p>
         </div>
       </div>

          <div id="statistics" className="feature-box">
             <div className="feature-icon">
               <img src={Statistics} alt="Statistics Icon"/>
             </div>
             <div className="feature-text">
               <h3>Cost Statistics</h3>
               <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
             </div>
           </div>

           <div id="support" className="feature-box">
             <div className="feature-icon">
               <img src={Support} alt="Support Icon"/>
             </div>
             <div className="feature-text">
               <h3>Support 24/7</h3>
               <p>A elementum, imperdiet enim, pretium
                 etiam facilisi in aenean quam mauris.</p>
             </div>
           </div>

             <div id="cashback" className="feature-box">
               <div className="feature-icon">
                 <img src={Cashback} alt="plånbok Icon"/>
               </div>
               <div className="feature-text">
                 <h3>Regular Cashback</h3>
                 <p>Sit facilisis dolor arcu, fermentum
                   vestibulum arcu elementum imperdiet
                   eleifend.</p>
               </div>
               </div>

               <div id="standards" className="feature-box">
                 <div className="feature-icon">
                   <img src={Standards} alt="Standards Icon"/>
                 </div>
                 <div className="feature-text">
                   <h3>Top Standards</h3>
                   <p>Faucibus cursus maecenas lorem
                     cursus nibh. Sociis sit risus id. Sit
                     facilisis dolor arcu.</p>
                 </div>
        </div>
     </div>
 </div>
  )
}

export default FeatureListItems