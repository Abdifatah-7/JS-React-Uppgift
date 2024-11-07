import React, { useState } from 'react'

const Accordions = () => {

//Här skapar jag en array (lista) med frågor, svar och unik id 
  const information = [
    {
      id: 1,
      question: "Is any of my personal information stored in the App?",
      answer: "Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
    },
    {
      id: 2,
      question: "What formats can I download my transaction history in?",
      answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque."
    },
    {
      id: 3,
      question: "Can I schedule future transfers?",
      answer: "Consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat."
    },
    {
      id: 4,
      question: "When can I use Banking App services?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione autem cum molestias quisquam consectetur quaerat id? Animi!"
    },
    {
      id: 5,
      question: "Can I create my own password that is easy for me to remember?",
      answer: "Et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas."
    },
    {
      id: 6,
      question: "What happens if I forget or lose my password?",
      answer: "Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas."
    }
  ];


    // Använd ett state-objekt för att hålla reda på vilka accordions som är öppna

  const [openItems, setopenItems] = useState({})


    // Funktion för att toggla en specifik accordion
    // fick hjälp från ChatGPT
  const toggleAccordion = (id) => {
    setopenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };



  return (
    <div className="accordion-wrapper">
    {information.map((item) => (
      <div key={item.id} className="accordion">
        <div 
          className="panel" 
          onClick={() => toggleAccordion(item.id)}
        >
          <p>{item.question}</p>
          <button 
            className={`btn-circle ${openItems[item.id] ? 'active-btn-circle' : ''}`}
          >
            <i className={`fa-solid fa-chevron-${openItems[item.id] ? 'up' : 'down'}`} />
          </button>
        </div>
        
        {openItems[item.id] && (
          <div className="accordion-text">
            <p>{item.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
};


export default Accordions