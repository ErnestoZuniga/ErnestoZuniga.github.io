import React from 'react';

import ContactInfo from './ContactInfo.jsx'
import styles from '../assets/styles/styles.module.scss'


const Header = () => {

  return (
    <div className={styles['header']}>

      <div className={styles['header__figure']}>
        <img src={'https://i.imgur.com/2oKnRZ5.png'} alt="Ernesto"/>
      </div>

      <div className={styles['header__body']}>

        <h1 className={styles['header__title']}>Luis Ernesto Zu&#241;iga Ontiveros</h1>

        <section className={styles['header__positions']}>
          <p>FrontEnd Developer</p>
          <p>Mechatronics Engineering</p>
        </section>

        <section className={styles['header__cttinfo']}>
          <ContactInfo tel={'5518137358'} /> 
          <ContactInfo email={'poli.ernesto95@gmail.com'} /> 
          <ContactInfo addres={'Gustavo A. Madero, CDMX'}/> 
          <ContactInfo facebook={'Facebook.com/Kamewalker'}/> 
          <ContactInfo twitter={'@Kamewalker_Tr'}/>
          <ContactInfo github={'github.com/ErnestoZuniga'}/>  
          <ContactInfo linkedin={'linkedin'}/>  
        </section>


        <section className={styles['header__btns']}>
          <button> Eng </button>
          <button> Esp </button>
        </section>


      </div>

    </div>
  );
}

export default Header;
