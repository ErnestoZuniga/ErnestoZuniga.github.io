import React from 'react';

import ContactInfo from './ContactInfo.jsx'


const Header = () => {
  const styles= {
    'header-container':{
      width:'100vw',
      height:'30vh'
    },
    'contactinfo-container':{
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'space-around',
      flexGrow: '1'
    },
    'img-container':{
      width:'5rem',
      height:'5rem'
    }
  }

  return (
    <div style={styles['header-container']}>
    <div>
      <h1>Luis Ernesto Zu&#241;iga Ontiveros</h1>
      <section>
        <p>Front End Developer</p>
        <p>Mechatronics Engineering</p>
      </section>
      <section style={styles['contactinfo-container']}>
        
        <ContactInfo tel={'5518137358'} /> 
        <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
        <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
        <ContactInfo facebook={'Facebook.com/Kamewalker'}/> 
        <ContactInfo twitter={'@Kamewalker_Tr'}/>
        <ContactInfo github={'github.com/ErnestoZuniga'}/>  
        <ContactInfo linkedin={'linkedin'}/>  
      </section>
    </div>
    <img style={styles['img-container']} src={'https://i.imgur.com/2oKnRZ5.png'} alt="Ernesto"/>
    <section>
      <button> Eng </button>
      <button> Esp </button>
    </section>
    </div>
  );
}

export default Header;
