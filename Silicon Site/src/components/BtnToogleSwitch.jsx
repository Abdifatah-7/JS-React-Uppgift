import React from 'react'

const BtnToogleSwitch = () => {
  return (
    <div className="btn-toogle-switch">
      <span className="dark-mode-text">Dark Mode</span>
      <label className="switch">
      <input className="darkmode-switch" type="checkbox" />
      <span className="slider round"></span>
    </label>
  </div>
  )
}

export default BtnToogleSwitch