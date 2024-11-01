import React from 'react'

const Accordions = () => {
  return (
    <div className="accordion-wrapper">
      <div id="mobil-active-accordion" className="accordion">
        <div className="panel">
          <p>Is any of my personal information <br/> stored in the App?</p>
          <button className="btn-circle active-btn-circle"> <i className="fa-solid fa-chevron-up"></i></button>
        </div>

        <div className="accordion-text">
          <p>Nunc duis id aenean gravida tincidunt eu, tempor
            ullamcorper. Viverra aliquam arcu, viverra et,
            cursus. Aliquet pretium cursus adipiscing gravida
            et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa
            cursus molestie lorem scelerisque pellentesque.
            Nisi, enim, arcu purus gravida adipiscing euismod
            montes, duis egestas. Vehicula eu etiam quam
            tristique tincidunt suspendisse ut consequat.</p>

            <p>Ornare senectus fusce dignissim ut. Integer
              consequat in eu tortor, faucibus et lacinia
              posuere. Turpis sit viverra lorem suspendisse
              lacus aliquam auctor vulputate. Quis egestas
              aliquam nunc purus lacus, elit leo elit facilisi.
              Dignissim amet adipiscing massa integer.</p>
        </div>
      </div>

      
      <div id="tablet-active-accordion" className="accordion">
        <div className="panel">
          <p>Is any of my personal information stored in the App?</p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>

      

      
      <div className="accordion">
        <div className="panel">
          <p>What formats can I download my <br/> transaction history in?</p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>


      <div id="tablet-active-accordion" className="accordion">
        <div className="panel">
          <p>Can I schedule future transfers?</p>
          <button className="btn-circle active-btn-circle"> <i className="fa-solid fa-chevron-up"></i> </button>
        </div>
        <div className="accordion-text">
          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>


      </div>


      
      <div id="mobil-active-accordion" className="accordion">
        <div className="panel">
          <p> Can I schedule future transfers? </p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i> </button>
        </div>
      </div>


      
      <div className="accordion">
        <div className="panel">
          <p>When can I use Banking App services?</p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>

      <div className="accordion">
        <div className="panel">
          <p>Can I create my own password that is <br/> easy for me to remember? </p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>

      
      <div className="accordion">
        <div className="panel">
          <p>What happens if I forget or lose my password?</p>
          <button className="btn-circle">  <i className="fa-solid fa-chevron-down"></i></button>
        </div>
      </div>

    </div>

  )
}

export default Accordions