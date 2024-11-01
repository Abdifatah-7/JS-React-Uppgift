import React from 'react'
import Accordions from '../Accordions'
import FaqIcons from '../FaqIcons'
import FaqInfo from '../FaqInfo'

const Faq = () => {
  return (
    <main aria-label=" frequently asked question " id="FAQ">
      <div className="container">
        <FaqInfo />
        <FaqIcons />
        <Accordions />

      </div>
    </main>
  )
}

export default Faq