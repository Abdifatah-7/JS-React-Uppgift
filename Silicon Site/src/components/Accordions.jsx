import React, { useEffect, useState } from 'react'

const Accordions = () => {

    // Använd ett state-objekt för att hålla reda på vilka accordions som är öppna

  const [accordionData, setAccordionData] = useState([]);
  const [openItems, setOpenItems] = useState({})
 

  const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/faq')
      const data = await res.json() 
      setAccordionData(data)

        if(!res.ok){
          throw new alert('Något gick fel vid hämtning av data');
        }

  }

  useEffect( () => {
    fetchData();
  },[]) 


    // Funktion för att toggla en specifik accordion

  const toggleAccordion = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };



  return (
    <div className="accordion-wrapper">
    {accordionData.map((item) => (
      <div key={item.id} className="accordion">
        <div 
          className="panel" 
          onClick={() => toggleAccordion(item.id)}
        >
          <p>{item.title}</p>
          <button 
            className={`btn-circle ${openItems[item.id] ? 'active-btn-circle' : ''}`}
          >
            <i className={`fa-solid fa-chevron-${openItems[item.id] ? 'up' : 'down'}`} />
          </button>
        </div>
        
        {openItems[item.id] && (
          <div className="accordion-text">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
};


export default Accordions