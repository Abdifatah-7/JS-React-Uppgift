import React from 'react'
import Navbar from '../Navbar'
import MainLogo from '../MainLogo'
import BtnSignIn from '../BtnSignIn'
import BtnToogleSwitch from '../BtnToogleSwitch'
import BtnMenuHamburger from '../BtnMenuHamburger'




const Header = () => { 
  return (
    <section id="navigation">
      <header>
        <div className="container">
          <MainLogo />
          <Navbar />
          <BtnToogleSwitch />
          <BtnMenuHamburger />
          <BtnSignIn />
        </div>
      </header>
    </section>

  )
}

export default Header