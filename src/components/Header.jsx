import React from 'react';

import ContactInfo from './ContactInfo.jsx'


const Header = () => {
  const styles= {
    'contactinfo-container':{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
    <div>
      <h1>Luis Ernesto Zu&#241;iga Ontiveros</h1>
      <section>
        <p>Front End Developer</p>
        <p>Mechatronics Engineering</p>
      </section>
      <section style={styles['contactinfo-container']}>
        <ContactInfo tel={'5518137358'}/> 
        <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
        <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
        <ContactInfo facebook={'facebook.com/Kamewalker'}/> 
        <ContactInfo twitter={'@Kamewalker_Tr'}/>
        <ContactInfo github={'github.com/ErnestoZuniga'}/>  
        <ContactInfo github={'linkedin.com/in'}/>  
      </section>
    </div>
    <img src={'https://i.imgur.com/2oKnRZ5.png'} alt="Ernesto"/>
    <section>
      <button> Eng </button>
      <button> Esp </button>
    </section>
    </>
  );
}

export default Header;
