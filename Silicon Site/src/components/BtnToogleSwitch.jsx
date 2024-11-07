import React, { useEffect, useState } from 'react'

const BtnToogleSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode (newMode)

    if(newMode){
      document.documentElement.setAttribute ('data-theme', 'dark');
      localStorage.setItem ('theme', 'dark');
    }

    else{
      document.documentElement.setAttribute ('data-theme', 'light');
      localStorage.setItem ('theme', 'light');
    }
  };

  useEffect(() =>{
    const savedTheme =localStorage.getItem('theme')

    if (savedTheme === 'dark'){
      document.documentElement.setAttribute ('data-theme', 'dark');
      localStorage.setItem ('theme', 'dark');
      setIsDarkMode(true);
    }
    else {
      document.documentElement.setAttribute ('data-theme', 'light');
      localStorage.setItem ('theme', 'light');
      setIsDarkMode(false);
    }
  },[])



  return (
    <div className="btn-toogle-switch">
      <span className="dark-mode-text">Dark Mode</span>
      <label className="switch">
        <input className="darkmode-switch" type="checkbox" checked = {isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
  </div>
  )
}

export default BtnToogleSwitch