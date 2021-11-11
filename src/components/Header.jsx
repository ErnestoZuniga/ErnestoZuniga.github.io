import React from 'react';

import ContactInfo from './ContactInfo.jsx'


const Header = () => {
  return (
    <>
    <div>
      <h1>Luis Ernesto Zuñiga Ontiveros</h1>
      <section>
        <p>Front End Developer</p>
        <p>Mechatronics Engineering</p>
      </section>
      <section>
        <ContactInfo tel={'5518137358'}/> 
        <p>poli.ernesto95@gmail.com</p>
        <p>contact info and stuff</p>
        <p>contact info and stuff</p>
        <p>contact info and stuff</p>
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
