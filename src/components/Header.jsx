import React from 'react';

import ContactInfo from './ContactInfo.jsx'


const Header = () => {

  return (
    <div>
      <img src={'https://i.imgur.com/2oKnRZ5.png'} alt="Ernesto"/>
      <div>
        <h1>Luis Ernesto Zu&#241;iga Ontiveros</h1>
        <section>
          <p>Front End Developer</p>
          <p>Mechatronics Engineering</p>
        </section>
        <section>
          <ContactInfo tel={'5518137358'} /> 
          <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
          <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
          <ContactInfo facebook={'Facebook.com/Kamewalker'}/> 
          <ContactInfo twitter={'@Kamewalker_Tr'}/>
          <ContactInfo github={'github.com/ErnestoZuniga'}/>  
          <ContactInfo linkedin={'linkedin'}/>  
        </section>
      </div>
      <section>
        <button> Eng </button>
        <button> Esp </button>
      </section>
      </div>
  );
}

export default Header;
